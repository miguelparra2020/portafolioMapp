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
            Je suis une personne bonne, humaine et intégre. Je suis concentré sur l'avancement, la réalisation de mes objectifs personnels, académiques et professionnels.
            J'aime les défis car je pense toujours à  des solutions et á des alternatives à  tous les obstacles qui se présentent.
            Je suis introverti car j'aime observer et apprécier mon environnement, mais je sais travailler en équipe et valoriser les autres. Je suis reconnaissant envers Dieu pour le présent et les opportunités qu'il me donne.     
            </div>
            <br />
            <div className='cardExperiencia'>
                <div className='titleCardExperiencia'>
                Mon expérience et mes projets
                </div>
                <div className='detailsCardExperiencia'>
                    👨‍💼 Je vous invite à  consulter tous les projets sur lesquels j'ai travaillé avec diligence ainsi que toute l'expérience que j'ai acquise. 
                    Je tiens à souligner que j'ai encore un long chemin à parcourir.. 
                </div>
                <a href='/tab2' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                Voir plus &nbsp;
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
                Mon éducation
                </div>
                <div className='detailsCardExperiencia'>
                    👨‍🎓 Je vous invite à consulter tous mes diplômes universitaires, tous les cours, diplômes et séminaires 
                    que j'ai suivis. J'aime beaucoup étudier et apprendre chaque jour davantage.
                </div>
                <a href='/tab3' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                Voir plus &nbsp;
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
export default HomeFrances;