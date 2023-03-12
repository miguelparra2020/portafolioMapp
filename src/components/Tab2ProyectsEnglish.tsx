import {  IonLabel } from '@ionic/react';
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
        <div >
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
                
                <IonLabel>dato2: &nbsp;{dato.c[1].v}</IonLabel><br />
                <IonLabel>dato3: &nbsp;{dato.c[2].v}</IonLabel><br />
                <IonLabel>dato4: &nbsp;{dato.c[3].v}</IonLabel><br />
                <IonLabel>dato5: &nbsp;{dato.c[4].v}</IonLabel><br />
                <IonLabel>dato6: &nbsp;{dato.c[5].v}</IonLabel><br />
                <IonLabel>dato7: &nbsp;{dato.c[6].v}</IonLabel><br />
                <IonLabel>dato8: &nbsp;{dato.c[7].v}</IonLabel><br />
                <IonLabel>dato9: &nbsp;{dato.c[8].v}</IonLabel><br />
                <IonLabel>dato10: &nbsp;{dato.c[9].v}</IonLabel><br />
                <IonLabel>dato11: &nbsp;{dato.c[10].v}</IonLabel><br />
                <IonLabel>dato12: &nbsp;{dato.c[11].v}</IonLabel><br />
                <IonLabel>dato13: &nbsp;{dato.c[12].v}</IonLabel><br />
                <IonLabel>dato14: &nbsp;{dato.c[13].v}</IonLabel><br />
                <IonLabel>dato15: &nbsp;{dato.c[14].v}</IonLabel><br />
                <IonLabel>dato16: &nbsp;{dato.c[15].v}</IonLabel><br />
                <IonLabel>dato17: &nbsp;{dato.c[16].v}</IonLabel><br />
                <IonLabel>dato18: &nbsp;{dato.c[17].v}</IonLabel><br />
                <IonLabel>dato19: &nbsp;{dato.c[18].v}</IonLabel><br />
                <IonLabel>dato20: &nbsp;{dato.c[19].v}</IonLabel><br />
                <IonLabel>dato21: &nbsp;{dato.c[20].v}</IonLabel><br />
                <IonLabel>dato22: &nbsp;{dato.c[21].v}</IonLabel><br />
                <IonLabel>dato23: &nbsp;{dato.c[22].v}</IonLabel><br />
                <IonLabel>dato24: &nbsp;{dato.c[23].v}</IonLabel><br />
                <IonLabel>dato25: &nbsp;{dato.c[24].v}</IonLabel><br />
                <IonLabel>dato26: &nbsp;{dato.c[25].v}</IonLabel><br />
                <IonLabel>dato27: &nbsp;{dato.c[26].v}</IonLabel><br />
                <IonLabel>dato28: &nbsp;{dato.c[27].v}</IonLabel><br />
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
