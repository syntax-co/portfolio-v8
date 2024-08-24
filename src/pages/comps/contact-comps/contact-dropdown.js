
import { useEffect, useState } from "react";
import { IoMailOutline,IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";




const ContItem = ({label,icon,tickCopied,delay}) => {

    const addToClipboard = () => {
        if (navigator.clipboard && window.isSecureContext) {
            // Use the Clipboard API if available
            navigator.clipboard.writeText(label).then(() => {
                console.log("Text copied to clipboard successfully!");
            }).catch(err => {
                console.error("Failed to copy text to clipboard: ", err);
            });
        } 
        else {}
    }

    return(
        <motion.div className="w-fit h-fit py-2 flex bg-salmon rounded-md
        relative z-10 cursor-pointer"
        
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:delay
            }
        }}
        exit={{opacity:0}}
        >
            <div className="px-2 h-full flex items-center"
            >
                {icon&&icon}
            </div>
            <div className=" text-sm text-white font-primary
            flex items-center pr-2"
            >
                {label}
            </div>
            {/* cover for onclick activation */}
            <div className="w-full h-full absolute z-[10] top-0
            cursor-pointer"
            
            onClick={() => {
                addToClipboard()
                tickCopied()
            }}
            />
        </motion.div>
    )
}

const ContContainer = ({tickCopied}) => {
    
    

    return(
        <div className="w-fit h-12 absolute
        right-0 top-[110%]"
        >
            <AnimatePresence mode="exit" 
            >
                <ContItem 
                label={'Munozchris484@gmail.com'}
                icon={
                    <IoMailOutline 
                    size={25}
                    color="white"
                    />
                }
                tickCopied={tickCopied}
                delay={.25}
                />
                
            
            
            </AnimatePresence>
        </div>
    )
}

const ContactDrop = () => {

    const [open,setOpen] = useState(false)
    const [copied,setCopied] = useState(false);

    const tickCopied = () => {

        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }

    useEffect(() => {
        console.log(open)
    }, [open]);

    return (
        <div className="relative cursor-pointer flex items-center"

        >
            <div className="w-10 h-10 relative flex items-center justify-center"
            onClick={() => {setOpen(!open)}}
            >
                <AnimatePresence mode="exit">
                {
                    open?
                    <motion.div key={'close-button'}
                    className="absolute"
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition:{
                            duration:.5,
                            delay:.5
                        }
                    }}
                    exit={{opacity:0}}
                    > 
                        <IoClose
                        size={45} 
                        color="white"
                        />
                    </motion.div>:
                    <motion.div key={'contact-button'}
                    className="absolute"
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition:{
                            duration:.5,
                            delay:.5
                        }
                    }}
                    exit={{opacity:0}}
                    >
                        <IoMailOutline
                        size={40} 
                        color="white"
                        />
                    </motion.div>
                }
                </AnimatePresence>
            
            </div>

            
            {
                open&&
                <ContContainer 
                tickCopied={tickCopied}
                />
            }

            <motion.div className=" bg-[#38df8b] text-white
            absolute right-[120%] rounded-md px-3 py-1
            font-primary flex items-center "

            initial={{opacity:0}}
            animate={{
                opacity:copied?1:0,
                transition:{
                    duration:copied? .5:2
                }
            }}
            >
                <div className="px-1"
                >
                    <FaCheck 
                    size={15}
                    color="white"
                    />
                </div>
                Copied
            </motion.div>
        </div>
    );
}
 
export default ContactDrop;