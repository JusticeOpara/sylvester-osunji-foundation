import { FC, ReactNode } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen,  children }) => {
    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 top-0 right-0 bottom-0 left-0 overflow-y:hidden h-[100vh] flex items-center justify-center z-[999] bg-graay-200 ">


            <div className="flex flex-col w-[504px] h-[456.6px] rounded shadow-2xl mt-20  z-10  bg-[#FFFAFA]">

                <div className='flex justify-center items-center mb-5 bg-[#0098DB] h-12 w-full'>
                    <p className='text-base font-inter font-medium '>Donate to Foundation</p>

                    
                </div>
                {/* <button className="px-2 py-1 text-white rounded hover:bg-slate-200" onClick={onClose}>
                        <AiOutlineClose size={20} />
                    </button> */}
                {children}

            </div>


        </div>
    );
};

export default Modal;

