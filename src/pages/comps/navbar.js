

import {useRouter} from 'next/router';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';


function Navbar({open,setOpen,setExiting}) {
    const router = useRouter();
    
    // const [buttonstate,setButtonstate] = useState(false)

    
    

    return ( 
        <div className="flex py-3 page-padding"
        
        >
          

                

            <div className="w-1/2 h-full flex items-center "
            >
                <div className="font-display text-white text-5xl cursor-pointer "
                onClick={() => {
                    router.push('./');
                }}
                >
                    CM
                </div>
            </div>

            <div className="w-1/2 h-full flex items-center justify-end ">

                
                

                <div className=""
                
                
                onClick={() => {
                    
                    if (open) {

                        setExiting(true)
                        setTimeout(() => {
                            setOpen(!open)
                            // setButtonstate(!buttonstate)
                        }, 750);

                    } else {

                        setExiting(false)
                        setOpen(!open)
                        // setButtonstate(!buttonstate)

                    }

                }}
                >
                    {/* <Hamburger
                    toggled={open}
                    color='white'
                    /> */}
                </div>



                



            </div>

        </div>
     );
}


export default Navbar;