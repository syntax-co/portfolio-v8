import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";






const Squircle = ({state,color,style,dex}) => {
    
    const rad = 25;
    const [over,setOver] = useState(false);
    const [seq,setSeq] = useState([50,25,50,75,25]);



    const anim = () => {
        setOver(true);

        setTimeout(() => {
            setOver(false);
        }, 2000);
    } 




    return(
        <motion.div className="w-full h-full flex items-center justify-center"
        onMouseEnter={anim}
        >

            <motion.div className="w-full h-full bg-white "
            style={{
                // border:`1px solid ${color? color:'white'}`,
            }}

            initial={{
                backgroundColor:color+'ff'
            }}

            animate={{
                backgroundColor:state? color+'ff':color+'00'
                ,
                transition:{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration: 3 + (1 * Math.random())
                }
            }}
            
            />

            

        </motion.div>
    )
} 




const CircSquareGrid = () => {
    
    const _a = 1
    const _b = 1
    const _c = 1
    

    const [counter,setCounter] = useState(0);
    
    const [grid,setGrid] = useState([
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0]
    ])

    const test = useRef([
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0]
    ])

    // const cGrid = [
    //     [_a,_a,_a,_a,_a],
    //     [_a,_b,_b,_b,_a],
    //     [_a,_b,_c,_b,_a],
    //     [_a,_b,_b,_b,_a],
    //     [_a,_a,_a,_a,_a]
    // ]


    const flattened = (item) => {

        const y = item.length;
        const x = item[0].length;
        const holder = [];

        for (var i=0; i<y; i++) {
            for (var k=0; k<x; k++) {
                holder.push(item[i][k]);
                
            }
        }

        return holder;
    }


    const gridRandomizer = () => {
        const randomCount = 3;
        const holder = [];
        const y = grid.length;
        const x = grid[0].length;

        const dup = test.current.map(
            item => item
        );

        
        while (holder.length < randomCount) {
            const coor = [Math.round( Math.random() * (y - 1) ),Math.round( Math.random() * (x - 1) )];
            if (!holder.includes(coor)) {
                holder.push(coor);
            }
        }


        holder.forEach((item,dex) => { 
            if (dup[item[0]][item[1]] == 0) {
                dup[item[0]][item[1]] = 1;
            } else {
                dup[item[0]][item[1]] = 0;
            }
            
        })

        // for (var i=0; i<y; i++) {
        //     for (var k=0; k<x; k++) {
        //         dup[i][k] = Math.round(Math.random());
        //     }
        // }
        // console.log('hit')

        setTimeout(() => {
            setGrid(dup);
        }, 4000 * Math.random());
    }



    

    
    useEffect(() => {
        gridRandomizer();
    }, [grid]);
   



    return (
        <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-2 absolute"
        >


            {
                flattened(grid).map((item,dex) => {


                    return(
                        <Squircle key={dex}
                        color={dex%2 == 0? '#ABDDFF':'#FF9B9B'}
                        state={item}
                        dex={dex}
                        />
                    )
                })
            }
            

            

        </div>
    );
}
 
export default CircSquareGrid;
