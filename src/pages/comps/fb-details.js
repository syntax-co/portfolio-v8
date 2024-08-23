


const FbTitle = ({label}) =>{

    return(
        <div className="w-fit mb-2 text-5xl text-white font-display"
        >
            {label}
            <div className="h-[2px] rounded-full bg-salmon" 
            />
        </div>
    )
}


const FbItem = ({label}) => {

    return(
        <div className="flex items-center text-xl text-white font-primary
        my-3"
        >
            <div className="w-2 h-2 rounded-full bg-lightBlue
            mx-2" 
            />
            {label}
        </div>
    )
}


const FbPanel = ({data}) => {

    return(
        <div className="fb-panel-body"
        >   
            
                <FbTitle 
                label={data.name}
                />

                <div className=""
                >
                {
                    data&&
                    data.items.map((item,dex) => {
                        return(
                            <FbItem key={item}
                            label={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const FbDetails = () => {

    const details = {
        'frontend':[
          'React',
          'Javascript',
          'Node.js',
          'Tailwind',
          'HTML/CSS',
        ],
        'backend':[
          'Node.js',
          'Express',
          'MongoDB'
        ]
    }

    return (
        <div className="fb-detail-body"
        >
            {
            Object.keys(details).map((key,dex) => {
                
                return(
                    <FbPanel key={key}
                    data={{
                        name:key,
                        items:details[key]
                    }}
                    />
                )
            })
            }
        </div>
    );
}
 
export default FbDetails;