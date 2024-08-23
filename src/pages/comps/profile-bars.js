import { motion } from "framer-motion";
import { useEffect, useState } from "react";



const Bar = ({dex,data}) => {

    const mod = dex%2


    return(
        <motion.div className="h-1 my-auto rounded-full relative"
        style={{
            width:data?data.width:null,
            backgroundColor:mod == 0? '#FF9B9B':'#ABDDFF'
        }}
        initial={{
            translateX:0
        }}
        animate={{
            translateX:mod==0? 
                [10,20,30,40,10]:
                [-10,-20,-30,-40,-10]
            ,
            transition:{
                duration:(Math.random()*1)+5,
                ease:'anticipate',
                repeat:Infinity,
                delay:(dex*.2)+.2
            }
        }}

        >

        </motion.div>
    )
}

const ProfileBars = () => {

    const barcount = 15;

    const [bars,setBars] = useState([]);

    const calcbars = () => {

        const item = document.querySelector('#bar-container');

        const height = item.offsetHeight;
        
        const mid = height/2;
        const hBars = Math.ceil(barcount/2)
        var offset = height/barcount;
        const holder = [];

        for (var i=0; i<hBars; i++) {
            
            const barWidth =   Math.sqrt((mid**2) - ((offset*(hBars-i))**2)) * 2;
            const pack = {
                width:barWidth-(barWidth*.15)
            } 

            if (i<hBars-1) {
                holder.splice(i,0,pack,pack)
            } else {
                holder.splice(i,0,pack)
            }
            
        }

        setBars(holder);
    }


    useEffect(() => {
        calcbars()
    }, []);


    return (
        <div id='bar-container' 
        className="w-full h-full absolute flex flex-col
        items-center"
        >

            {
                bars.length>0&&
                bars.map((item,dex) => {

                    return(
                        <Bar  key={'profile-bar-'+dex}
                        dex={dex}
                        data={item}
                        />
                    )
                })
            }


        </div>
    );
}
 
export default ProfileBars;