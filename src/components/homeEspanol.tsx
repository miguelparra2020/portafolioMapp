
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
            Soy una buena persona, humana e íntegra. enfocado en salir adelante, lograr mis metas personales, académicas y laborales.
            Me gustan los retos, porque siempre pienso en soluciones y alternativas a todos los obstáculos que se presentan. 
            Soy introvertido porque me gusta observar y apreciar el entorno, pero se trabajar en equipo y valorar a los demás, 
            le doy gracias a Dios por el presente y las oportunidades que me da. 
            </div>
            <br />
            <div className='cardExperiencia'>
                <div className='titleCardExperiencia'>
                    Mi expereciencia y proyectos
                </div>
                <div className='detailsCardExperiencia'>
                    👨‍💼 Te invito a visualizar todos los proyectos en los cuales he trabajado arduamente y toda mi experiencia adquirida,
                    recalco que aún tengo mucho camino por recorrer. 
                </div>
                <a href='/tab2' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                    Ver más &nbsp;
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
                    Mi educación
                </div>
                <div className='detailsCardExperiencia'>
                    👨‍🎓 Te invito a visualizar todos mis títulos universitarios, todos los cursos, diplomados y seminarios que he
                    realizado, me gusta mucho estudiar y cada día aprender más. 
                </div>
                <a href='/tab3' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                    Ver más &nbsp;
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
export default HomeEspanol;