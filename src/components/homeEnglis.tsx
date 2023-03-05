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
            <span>I am a good, human, and integral person. I'm focused on moving forward, 
            achieving my personal, academic, and professional goals. </span><br />
            <span>I like challenges because I always think of solutions and alternatives to all the obstacles that arise. </span><br />
            <span>I am introverted because I like to observe and appreciate my surroundings, 
            but I can work in a team and value others. I give thanks to God for the present and the opportunities He gives me.</span>
            </div>
        </div>
    );
};
export default HomeEnglis;