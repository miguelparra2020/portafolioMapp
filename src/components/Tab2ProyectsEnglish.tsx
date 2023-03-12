// import {  IonLabel } from '@ionic/react';
// import { newspaper } from 'ionicons/icons';
import  { useState, useEffect } from 'react';
import { IonAvatar, IonChip, IonImg } from '@ionic/react';

import './Tab2Style.css';

import {DATAEXPPROENGLIS} from '../environment'

function Tab2ProyectsEnglish() {
  

  const [datos, setDatos] = useState<any>(null);

  async function obtenerDatos() {
    const respuesta = await fetch(DATAEXPPROENGLIS);
    const datos = await respuesta.text();
    const data = datos.slice(47, -2);
    const json_data = JSON.parse(data);
    const data_map = json_data.table.rows;
    setDatos(data_map);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);
  setInterval(() => {
    obtenerDatos();
  }, 1800000);


  console.log(datos)

  return (
    <div >
      {datos ? (
        <div className='cardsProyects'>
          {datos.map((dato: any) => (
            <div key={dato.c[1].v} >
                <div className='cardProyecExperi'>
                    <div className='cardHeaderPE'>
                        <div className='cardHeaderPEIcon'>
                        <IonAvatar className='cardHeaderPEIconIMG'>
                            <img alt={dato.c[2].v} src={dato.c[4].v} className='cardHeaderPEIconIMG'/>
                        </IonAvatar>
                        </div>
                        <div className='cardHeaderPEDescrip'>
                            <div className='cardHeaderPEDescripTitle'>{dato.c[2].v}</div>
                            <div className='cardHeaderPEDescripSubTitle'>{dato.c[3].v}</div>
                        </div>
                        <div className='cardHeaderPENumber'> 
                            <IonChip color={'primary'}>{dato.c[0].v}</IonChip>
                        </div>
                    </div>
                    <div className='contentImg'>
                    <IonImg src={dato.c[5].v} alt={dato.c[2].v}></IonImg>

                    </div>
                <div className='detailsCardExperiencia'>
                <div className='cardHeaderPEDescripTitle'>Descripción:</div>
                    💻 {dato.c[6].v}
                </div>
                <div className='detailsCardExperiencia'>
                <div className='cardHeaderPEDescripTitle'>Tecnologías utilizadas:</div>
                        <div className='contentTecnologias'>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[8].v} src={dato.c[8].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[9].v} src={dato.c[9].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[10].v} src={dato.c[10].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[11].v} src={dato.c[11].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[12].v} src={dato.c[12].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[13].v} src={dato.c[13].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[14].v} src={dato.c[14].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[15].v} src={dato.c[15].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[16].v} src={dato.c[16].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[17].v} src={dato.c[17].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[18].v} src={dato.c[18].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[19].v} src={dato.c[19].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[20].v} src={dato.c[20].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[21].v} src={dato.c[21].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[22].v} src={dato.c[22].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[23].v} src={dato.c[23].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[24].v} src={dato.c[24].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[25].v} src={dato.c[25].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[26].v} src={dato.c[26].v} className='tecnologiasImg'/>
                        </IonAvatar>
                        <IonAvatar className='tecnologiasImg'>
                            <img alt={dato.c[27].v} src={dato.c[27].v} className='tecnologiasImg'/>
                        </IonAvatar>...
                        </div>
                </div>
                <a href='/tab2' className='buttonCardExperiencia'>
                <div className='buttonCardExperiencia' >
                    
                    Ver todo &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 -2 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    
                </div>
                </a>
            </div>
                
                
                <br /><br />
                </div>
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Tab2ProyectsEnglish;
