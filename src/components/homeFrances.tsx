import './home.css';
const HomeFrances: React.FC = () => {
    return (
        <div className='homeContent'>
            <div className='titleHome'>
                <span className='spanFrances'>Développeur de Logiciels</span>
            </div>
            <br />
            <div className='avatarPerfil'>
                <img className='avatarPerfil' src="https://res.cloudinary.com/ddllgbo70/image/upload/v1638329235/assetsPortafolioMiguelPaez/miguelFoto400x400Webp_pfpnps.webp" alt="avatar perfil" />
            </div>
            <br />
            <div className='detallePerfil'>
            <span>Je suis une personne bonne, humaine et intègre. Je suis concentré sur l'avancement, la réalisation de mes objectifs personnels, académiques et professionnels.</span><br />
            <span>J'aime les défis car je pense toujours à des solutions et à des alternatives à tous les obstacles qui se présentent.</span><br />
            <span>Je suis introverti car j'aime observer et apprécier mon environnement, mais je sais travailler en équipe et valoriser les autres. Je suis reconnaissant envers Dieu pour le présent et les opportunités qu'il me donne.</span>      
            </div>
        </div>
    );
};
export default HomeFrances;