import { IonButton, IonChip, IonIcon, IonLabel } from '@ionic/react';
import { newspaper } from 'ionicons/icons';
import  { useState, useEffect } from 'react';
import './dataDepRet.css';

import {DATADEPRET} from '../environment'

function DataDepRet() {
  

  const [datos, setDatos] = useState<any>(null);

  async function obtenerDatos() {
    const respuesta = await fetch(DATADEPRET);
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
    <div className='centrar'>
      {datos ? (
        <div >
          {datos.map((dato: any) => (
            <div key={dato.c[1].v} >
                <div className='contenedor'>
                <IonLabel><span className='titulos'>Id:</span> &nbsp;{dato.c[1].v}</IonLabel>&nbsp;&nbsp;&nbsp;&nbsp;
                <IonLabel><span className='titulos'>Tipo:</span> &nbsp;{dato.c[5].v}&nbsp;</IonLabel><br />
                <IonLabel><span className='titulos'>Fechas:</span> &nbsp;{dato.c[0].f} &nbsp;</IonLabel><br />
                <IonLabel><span className='titulos'>Valor:</span> &nbsp;<IonChip color={dato.c[6].v}>💵 ${Intl.NumberFormat("de-DE").format(dato.c[2].v)}</IonChip>&nbsp;&nbsp;</IonLabel><br />
                <IonLabel><span className='titulos'>Concepto:</span> &nbsp;{dato.c[3].v}&nbsp;&nbsp;</IonLabel><br />
                <IonButton expand="block" href={dato.c[9].v} target="_blanck" color={dato.c[6].v}> Soporte &nbsp;<IonIcon icon={newspaper}></IonIcon> </IonButton> 
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default DataDepRet;
