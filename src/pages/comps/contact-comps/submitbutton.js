import {AiOutlineSend} from 'react-icons/ai'
import { IconContext } from "react-icons";
import { useState } from 'react';
import { motion } from 'framer-motion';



// ███████╗██╗   ██╗██████╗ ███╗   ███╗██╗████████╗
// ██╔════╝██║   ██║██╔══██╗████╗ ████║██║╚══██╔══╝
// ███████╗██║   ██║██████╔╝██╔████╔██║██║   ██║   
// ╚════██║██║   ██║██╔══██╗██║╚██╔╝██║██║   ██║   
// ███████║╚██████╔╝██████╔╝██║ ╚═╝ ██║██║   ██║   
// ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝   ╚═╝   
                                                

const SubmitButton = ({handleSubmit}) => {
    const [hovering,setHovering] = useState(false);

    return(
      <div className='w-5/6 h-[10%] my-5 flex items-center justify-end cursor-pointer'
      onClick={() => {
        handleSubmit();
      }}
      >
        
        <div className='w-[80px] h-[40px] bg-salmon flex items-center justify-center relative overflow-hidden'
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        >
          <motion.div className='w-full h-full absolute bg-lightBlue'
          initial={{left:'-100%'}}
          animate={{
            left:hovering? 0:'-100%'
          }}
          ></motion.div>
          <div className='relative'>
            <AiOutlineSend 
            size={25} 
            color='white'
            />
          </div>
          
        </div>
  
      </div>
    )
  }

  export default SubmitButton;