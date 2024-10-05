import { useEffect, useState } from "react"

const Modal = ({opened, onClose, children, containerClassName, className}) => {

    const [showModal, setShowModal] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);

    if(!onClose){
        onClose = () => {
            setModalOpened(false);
        }
    }


    


    useEffect(() => {
        if(modalOpened){
            setTimeout(()=>{
                setShowModal(true)
            }, 200)
        }else{

            setTimeout(() => {
              setShowModal(false);
            }, 500);

        }
    }, [modalOpened]);

    useEffect(
      () => {
        setTimeout(()=>{

            setModalOpened(opened);
        }, 30)
      },
      [opened]
    );

    return <div className={`w-screen h-screen bg-[rgba(0,0,0,.5)] fixed top-0 left-0 z-[999] transition-all  ${modalOpened ? "flex" : "hidden"} ${showModal ? "opacity-100" : "opacity-0"}`}>

        <div className={`flex-1 w-full h-full relative ${className? className : ""}`}>

            <div className={`relative z-[999] ${containerClassName? containerClassName : ""}`}>
                {children}
            </div>

            <div className="absolute top-0 left-0 w-full h-full" onClick={()=>{
                setModalOpened(false);
                onClose();
            }
            } />

            
        </div>
      </div>;
}

export default Modal