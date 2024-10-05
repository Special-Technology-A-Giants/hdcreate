import { navRoutes } from "@/utils/general";
import Link from "next/link";
import PageContainer from "./PageContainer";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  LogoImageSVG,
  NavBackground,
} from "@/images";
import { FaBars, FaUser, FaUserCircle } from "react-icons/fa";
import Modal from "./Modal";
import { useCallback, useEffect, useState } from "react";
import MobileNav from "./inner/MobileNav";
import SignUpContent from "./SignupContent";

const Nav = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [signUpOpened, setSignUpOpened] = useState(false);
  const { pathname, query } = useRouter();
  const pathNameArr = pathname.split("/").filter((path) => path.length > 0);

  useEffect(() => {
    setMobileMenuOpened(false);
  }, [pathname]);

  useEffect(() => {
    if (
      query.nav &&
      (query.nav.toLowerCase() === "signup" ||
        query.nav.toLowerCase() === "login")
    ) {
      setSignUpOpened(true);
      setMobileMenuOpened(false);
    } else {
      setSignUpOpened(false);
    }
  }, [query]);

  return (
    <>
      <div className="">
        <PageContainer className="py-20 flex flex-col md:flex-row items-center md:items-[unset] md:justify-between relative gap-6">
          <Image src={NavBackground} alt="" className="opacity-90" fill />

          <button
            className="absolute top-10 right-10 text-2xl md:hidden"
            onClick={() => {
              setMobileMenuOpened(true);
            }}
          >
            <FaBars />
          </button>

          <div className="flex flex-col items-center md:items-start gap-10 h-[180px] md:gap-3 justify-between">
            <ul className="flex items-center gap-3">
              <li>
                <a href="https://web.facebook.com/createstarz/">
                  <Image src={FacebookLogo} alt="" className="w-[25px]" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={InstagramLogo} alt="" className="w-[25px]" />
                </a>
              </li>
            </ul>
            <p className="text-primary font-bold text-lg sm:text-xl md:text-2xl">
              Moulding Lives...
            </p>
          </div>

          <div>
            <Image
              src={LogoImageSVG}
              alt=""
              className="w-full md:w-[150px] max-w-[200px]"
            />
          </div>
          <div className="flex flex-col items-center gap-10 h-[180px] md:gap-3 justify-between md:items-end">
            <Link
              href={`${pathname}?nav=login`}
              className="hidden md:inline-flex z-10 gap-2 items-center text-primary"
            >
              <span>
                <FaUser />
              </span>
              <span>Log In</span>
            </Link>
            <div className="text-primary font-bold text-sm">
              <p className="">08036451488</p>
              <p className="">Lagos, Nigeria</p>
            </div>
            <p className="text-primary font-bold text-lg sm:text-xl md:text-2xl">
              ...Crafting the Future
            </p>
          </div>
        </PageContainer>
        <div className="special-scrollbar hidden md:flex">
          <ul className="flex justify-center text-white w-full bg-primary text-xs">
            {navRoutes.map(({ label, path, children }, index) => {
              var pathParent = path
                .split("/")
                .filter((path) => path.length > 0);

              return (
                <li key={index} className="flex group relative">
                  <Link
                    className={`flex items-center py-3 px-3 text-center ${
                      pathParent[0] === pathNameArr[0]
                        ? "bg-secondary"
                        : "bg-primary"
                    } font-medium ${
                      index > 0 ? "border-l-2 border-l-white" : ""
                    }`}
                    href={path}
                  >
                    {label}
                  </Link>

                  {children && (
                    <ul className="absolute shadow-md z-10 hidden group-hover:flex flex-col top-[100%]">
                      {children.map(({ path, label }, index) => (
                        <li key={index} className="flex relative w-full">
                          <Link
                            className={`flex w-full text-left whitespace-pre py-3 px-6 ${
                              path === pathname ? "bg-secondary" : "bg-primary"
                            } font-medium ${
                              index > 0 ? "border-t-2 border-t-white" : ""
                            }`}
                            href={path}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Modal
        onClose={() => {
          setMobileMenuOpened(false);
        }}
        opened={mobileMenuOpened}
      >
        <div className="h-screen absolute right-0 top-0 overflow-y-scroll special-scrollbar bg-white flex flex-col gap-10 py-14 px-10 w-full max-w-[350px]">
          <div className="flex items-center justify-between">
            <Link
              href={`${pathname}?nav=login`}
              className="inline-flex gap-2 items-center text-primary"
            >
              <span className="text-lg">
                <FaUserCircle />
              </span>
              <span>Log In</span>
            </Link>

            <button
              className="text-2xl"
              onClick={() => {
                setMobileMenuOpened(false);
              }}
            >
              <MdClose />
            </button>
          </div>

          <MobileNav />
        </div>
      </Modal>

      <Modal
        opened={signUpOpened}
        onClose={() => {
          setSignUpOpened(false);
        }}
      >
        <div className="fixed w-full max-w-[450px] bg-white  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
          <SignUpContent />
        </div>
      </Modal>
    </>
  );
};

export default Nav;
