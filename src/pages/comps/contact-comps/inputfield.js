import { IconContext } from "react-icons";
import {AiOutlineCheck,AiOutlineClose} from 'react-icons/ai';
import { motion } from "framer-motion";
                                                                              
const InputField = ({fieldLabel,type,fieldId,status}) => {

    return(
      <div className='w-5/6 h-[10%] relative my-5'>
  
        <div className='w-full h-full absolute left-2 top-1 border border-lightBlue'>
  
        </div>
        <div className='w-full h-full absolute border bg-darkSlate border-salmon flex items-center
        text-white text-lg font-primary
        '>

          

          <div className='w-[20%] flex items-center justify-center
          sm:text-xs
          md:text-sm
          lg:text-base
          xl:text-lg
          '>
            {fieldLabel}
          </div>
  
          <input id={`${fieldId}-field`} className=' w-[75%] h-[80%] bg-transparent 
          sm:text-sm
          md:text-base
          lg:text-lg
          xl:text-lg
          '
          label={fieldLabel}
          type={type? type:'text'}
          ></input>
  
          <div className="w-[10%] h-full flex items-center justify-center ">
            <div className="w-8 h-8 flex mr-3 items-center justify-center  relative">
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
                color='#87ff91'
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
                color='#FF9B9B'
                />
                
              </motion.div>
            </div>
          </div>
  
        </div>
  
      </div>
    )
  }


  export default InputField;