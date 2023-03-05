import './home.css';
const HomeEspanol: React.FC = () => {
    return (
        <div className='homeContent'>
            <div className='titleHome'>
                <span className='spanEspanol'>Desarrollador de Software</span>
            </div>
            <br />
            <div className='avatarPerfil'>
                <img className='avatarPerfil' src="https://res.cloudinary.com/ddllgbo70/image/upload/v1638329235/assetsPortafolioMiguelPaez/miguelFoto400x400Webp_pfpnps.webp" alt="avatar perfil" />
            </div>
            <br />
            <div className='detallePerfil'>
            <span>Soy una buena persona, humana e íntegra. enfocado en salir adelante, lograr mis metas personales, académicas y laborales.</span><br />
            <span>Me gustan los retos, porque siempre pienso en soluciones y alternativas a todos los obstáculos que se presentan. </span><br />
            <span>Soy introvertido porque me gusta observar y apreciar el entorno, pero se trabajar en equipo y valorar a los demás, 
            le doy gracias a Dios por el presente y las oportunidades que me da. </span>
            

            </div>
        </div>
    );
};
export default HomeEspanol;