import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import InputField from "./comps/contact-comps/inputfield";
import MessageField from "./comps/contact-comps/messagefiled";
import SubmitButton from "./comps/contact-comps/submitbutton";
import Grid from "./comps/loading-anims/grid";













const Contact = ({}) => {
    const [nameFlag,setNameFlag] = useState('');
    const [emailFlag,setEmailFlag] = useState('');
    const [messageFlag,setMessageFlag] = useState('');
    const [loading1,setLoading1] = useState(true);

    

    // ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
    // ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
    // █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
    // ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
    // ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
    // ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                              
    const clearFields = () => {
      const name = document.querySelector('#name-field');
      const email = document.querySelector('#email-field');
      const message = document.querySelector('#message-field');
      
      name.value = '';
      email.value = '';
      message.value = '';

      setNameFlag('');
      setEmailFlag('');
      setMessageFlag('');
      
    }
    

    const isValidEmail = (email) => {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      // Test the email against the regex
      return emailRegex.test(email);
    }

    const getFormData = () => {
      const name = document.querySelector('#name-field').value;
      const email = document.querySelector('#email-field').value;
      const message = document.querySelector('#message-field').value;
  
      var emailGood = isValidEmail(email);
      
      if (name) {
        setNameFlag('good')
      } else {
        setNameFlag('bad')
      }
  
      if (email&&emailGood) {
        setEmailFlag('good')
      } else {
        setEmailFlag('bad')
      }
  
      if (message) {
        setMessageFlag('good')
      } else {
        setMessageFlag('bad')
      }
  
  
  
      if (name,email,emailGood) {
        return {
          name:name,
          email:email,
          message:message
        }
      } else {
        return false;
      }
  
  
    }
  
    const handleSubmit = async() => {
      const formData = getFormData();
      
      
      if (formData) {

        // setShow(true);
        // setSending(true);
        const endpoint = process.env.NEXT_PUBLIC_BASE_URL + 'api/sendEmail';
  
        const text = `${formData.name}: ${formData.email} \n\n\n` + formData.message
        formData.message=text;
  
        const config = {
          method:'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body:JSON.stringify(formData)
        }
  
        const result = await fetch(endpoint,config);
  
        // if (result) {
          
        //   setTimeout(() => {
        //     setSent(true)
        //     setSending(false);
        //     clearFields();
        //   }, 5000);
  
          
        // }
  
  
      } 
  
    }
    

    


    useEffect(() => {
      
      

      setTimeout(() => {
        setLoading1(false);
      }, 1000);


    }, []);







    // ██████╗  █████╗  ██████╗ ███████╗
    // ██╔══██╗██╔══██╗██╔════╝ ██╔════╝
    // ██████╔╝███████║██║  ███╗█████╗  
    // ██╔═══╝ ██╔══██║██║   ██║██╔══╝  
    // ██║     ██║  ██║╚██████╔╝███████╗
    // ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
                                     
  
    return (
      <motion.div className='contact-page-main-body'
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{
          delay:.45,
          duration:.45
      }
      }}
      exit={{opacity:0}}
      > 

        

        
        <div className=' w-full '>

                
            <div className='text-white text-4xl left-[3px] top-[3px] font-display'>
                Contact
            </div>
            

            <div className="w-full h-[3px] rounded-full bg-salmon mt-2" 
            >
                
            </div>

            

        </div>
  
        

        <div className='contact-panel-holder'>

            

            <div className='contact-panel-left'>

                <InputField fieldLabel='Name' type='text'  fieldId={'name'}  status={nameFlag} />
                <InputField fieldLabel='E-Mail' type='email'  fieldId={'email'}  status={emailFlag} />
                <MessageField fieldLabel='Message'  fieldId={'message'}  status={messageFlag} />
                <SubmitButton handleSubmit={handleSubmit} />

            </div>

            <div className='contact-panel-right'>

                <div className="w-ful h-full relative"
                > 

                    <motion.div key={'phone-model'}
                    className="w-full h-full absolute"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                    <spline-viewer url="https://prod.spline.design/u-csdYYKo3rQsgKg/scene.splinecode"></spline-viewer>
                    </motion.div>
                    
                    <AnimatePresence key='phone-model-presence' >
                    {
                    loading1 &&
                    <motion.div key={'loading-anim'}
                    className="w-full h-full flex items-center justify-center absolute
                    rounded-md
                    bg-darkerSlate
                    "
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                        <Grid />
                    </motion.div>
                    }
                    </AnimatePresence>
                    

                    

                </div>

            </div>

        </div>
    
    
  
        
      </motion.div>
    );
  }
 
export default Contact;