// import { IonImg } from '@ionic/react';
import './home.css';
const HomeEnglis: React.FC = () => {
    return (
        <div className='homeContent'>
            <div className='titleHome'>
                <span className='spanEnglish'>Software Developer</span>
            </div>
            <br />
            <div className='avatarPerfil'>
                <img className='avatarPerfil' src="https://res.cloudinary.com/ddllgbo70/image/upload/v1638329235/assetsPortafolioMiguelPaez/miguelFoto400x400Webp_pfpnps.webp" alt="avatar perfil" />
            </div>
            <br />
            <div className='detallePerfil'>
                I am a good, human, and integral person. I'm focused on moving forward, 
                achieving my personal, academic, and professional goals. 
                I like challenges because I always think of solutions and alternatives to all the obstacles that arise. 
                I am introverted because I like to observe and appreciate my surroundings, 
                but I can work in a team and value others. I give thanks to God for the present and the opportunities He gives me.
            </div>
            <br />
            <div className='cardExperiencia'>
                <div className='titleCardExperiencia'>
                My experience and projects
                </div>
                <div className='detailsCardExperiencia'>
                    👨‍💼 I invite you to view all the projects I have worked on diligently and all the experience I have gained. 
                    I emphasize that I still have a long way to go.
                </div>
                <a href='/tab2' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                    View more &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 -2 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    
                </div>
                </a>
            </div>
            <br />
            <div className='cardExperiencia'>
                <div className='titleCardExperiencia'>
                    My education
                </div>
                <div className='detailsCardExperiencia'>
                    👨‍🎓 I invite you view all my university degrees, all the courses, diplomats and seminars I have completed. 
                    I really enjoy studying and learning more every day.
                </div>
                <a href='/tab3' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                View more &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 -2 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    
                </div>
                </a>
            </div>
        </div>
    );
};
export default HomeEnglis;