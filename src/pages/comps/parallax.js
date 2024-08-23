import { useEffect, useRef, useState } from "react";






const ParallaxSign = () => {
    

    const [pos,setPos] = useState([-10,-10]);
    const anchor = useRef(null);
    const ratio = -.02;
    
    const handleMove = (event) => {
        // console.log(event);
        const x = event.x;
        const y = event.y;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const wMid = width/2;
        const hMid = height/2;
        
        const xDif = x - wMid;
        const yDif = y - hMid;

        const finPos = [xDif * ratio,yDif * ratio];
        setPos(finPos);
    }


    function calculateDistance(point1, point2) {
        // Calculate the horizontal and vertical differences
        const deltaX = point2[0] - point1[0];
        const deltaY = point2[1] - point1[1];

        // Use the Pythagorean theorem to find the Euclidean distance
        const distance = Math.hypot(deltaX, deltaY);

        return distance;
    }  

    const handleOrient = (event) => {
    
        const restrict = 12;
        const beta = event.beta;
        const gamma = event.gamma;
        var anchorPoint;
        
        if (anchor.current) {
        anchorPoint = anchor.current;
        } else {
        anchorPoint = {
            beta:beta,
            gamma:gamma
        }
        anchor.current = anchorPoint;
        }

        const betaChange = beta - anchorPoint.beta;
        const gammaChange = gamma - anchorPoint.gamma;
        const finPos = [betaChange,gammaChange*-1];

        if (betaChange > restrict) {
        finPos[0] = restrict;
        }
        else if (betaChange < restrict*-1) {
        finPos[0] = restrict * -1;
        }

        if (gammaChange > restrict) {
        finPos[1] = restrict*-1;
        }
        else if (gammaChange < restrict*-1) {
        finPos[1] = restrict;
        }

        setPos(finPos);

    }


    useEffect(() => {
        const item = document.querySelector('#panel-1');
        item.addEventListener('mousemove',handleMove);

        window.addEventListener('deviceorientation',handleOrient);

        
    }, []);


    return (
        <div id="panel-1" className='parallax-body'>
        

            <div className="nameParallax"
            >
                
                <div className="w-full h-full absolute"
                style={{
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    backgroundImage:'url(./images/name-salmon.png)',
                    right:pos[0],
                    bottom:pos[1]
                }}
                />
                <div className="w-[100%] h-[100%] absolute"
                style={{
                    scale:2,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain',
                    backgroundImage:'url(./images/name-blue.png)'
                }}
                />
            </div>


        </div>
    );
}
 
export default ParallaxSign;