import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {AiOutlineCheck,AiOutlineClose} from 'react-icons/ai';
                             


const MessageField = ({fieldLabel,fieldId,status}) => {
    return(
      <div className='w-5/6 h-[50%] relative'>
  
        <div className='w-full h-full absolute left-2 top-1 border border-lightBlue'>
  
        </div>
        <div className='w-full h-full absolute border bg-darkSlate border-salmon
        flex flex-col items-center justify-center
        '>
          
          <textarea id={`${fieldId}-field`} className='w-[90%] h-[80%] bg-transparent resize-none text-white text-lg'
          placeholder={fieldLabel}
          ></textarea>

          <div className="w-[95%] h-[10%] flex items-center justify-end">

            <div className="w-8 h-8 flex items-center justify-center  relative">
              <motion.div className="absolute"
              initial={{opacity:0}}
              animate={{
                opacity:
                status === ''? 0:
                status === 'good'? 1: 0
              }}
              >
                <AiOutlineCheck 
                size={25} 
                color="#87ff91"
                />
              </motion.div>
              
              <motion.div className="absolute"
              initial={{opacity:0}}
              animate={{
                opacity:
                status === ''? 0:
                status === 'bad'? 1: 0
              }}
              >
                
                  <AiOutlineClose 
                  size={25} 
                  color="#ff9b9b"
                  />
                
                </motion.div>
            </div>
            
          </div>
        </div>
  
      </div>
    )
  }


  export default MessageField;