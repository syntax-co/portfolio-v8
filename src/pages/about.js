import FbDetails from "./comps/fb-details";
import ProfileBars from "./comps/profile-bars";



const AboutPage = () => {
    return (
        <div className="about-page-main-body"
        >

            <div className="about-left-panel"
            >

                <div className="w-[250px] h-[250px] mx-auto relative
                flex items-center "
                >
                    <ProfileBars />

                    <div
                    className="w-[70%] aspect-square relative
                    bg-center bg-cover rounded-full
                    mx-auto"
                    style={{
                        backgroundImage:'url(./images/profile-photo.jpg)'
                    }} 
                    />
                </div>

                <div className="al-panel-content"
                >

                    <div className="w-fit mb-24 my-auto"
                    >
                        <div className="mb-2 text-6xl text-lightBlue font-display"
                        >
                            Hello!
                        </div>
                        <div className=" text-5xl font-display"
                        >
                            I'm Chris
                        </div>
                        <div className="w-full h-1 mt-2 rounded-full bg-salmon"
                        />
                    </div>

                    <div className="text-lg font-primary"
                    >
                    I am a motivated web developer with a solid understanding of the MERN stack 
                    (MongoDB, Express.js, React.js, Node.js). My experience covers both front-end 
                    and back-end development, allowing me to create responsive and functional web applications.
                    <br />
                    <br />
                    I am continuously learning and eager to apply my skills to real-world projects. 
                    Whether working independently or as part of a team, I strive to deliver quality 
                    code and contribute to successful web applications.
                    </div>

                </div>

            </div>

            <div className="about-right-panel"
            >
                <FbDetails 
                />
            </div>

        </div>
    );
}
 
export default AboutPage;