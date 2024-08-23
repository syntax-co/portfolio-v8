import { useEffect, useState } from "react";


const Tag = ({label}) => {

    return(
        <div className="bg-salmon rounded-full 
        text-lg text-white font-primary
        px-4 mx-3 my-3"
        >
            {label}
        </div>
    )
}


const ProjectPanel = ({data}) => {

    const [text,setText] = useState('')
    
    const getText = async() => {
        if (data) {

            const _text = await (await fetch(data._data.description)).text()
            if (_text) {
                setText(_text)
            }
        }
        
    }

    useEffect(() => {
        getText()
    }, []);

    return (
        <div className="project-panel-body"
        >

            <div className="project-panel-inner-content"
            >
                <div className="text-3xl text-lightBlue font-display
                mb-3"
                >
                    {
                        data&&
                        data._data.title
                    }
                </div>
                
                <div className="h-[2px] w-full bg-salmon rounded-full" 
                />
                
                <div className="project-description"
                >
                    {text}
                </div>
                
                <div className="flex flex-wrap items-center pt-10
                mt-auto"
                >
                    {
                    data&&
                    data._data.tags.map((item,dex) => {
                        return(
                            <Tag key={'project-'+data._data.altTitle+'-'+item}
                            label={item}
                            />
                        )
                    })
                    }
                </div>

            </div>

            <div className="project-panel-image-holder"
            >
                <div className="w-full h-full bg-center bg-contain bg-no-repeat"
                style={{
                    backgroundImage:`url(${data&&data._data.imagepath})`
                }}
                />
            </div>    

        </div>
    );
}
 
export default ProjectPanel;