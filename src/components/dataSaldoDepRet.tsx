import { IonChip } from '@ionic/react';
import  { useState, useEffect } from 'react';
import './dataSaldoDepRet.css';

import {DATASALDODEPRET} from '../environment'

function DataSaldoDepRet() {
  

  const [datos, setDatos] = useState<any>(null);

  async function obtenerDatos() {
    const respuesta = await fetch(DATASALDODEPRET);
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
            <div key={dato.c[0].v} >
                <div >
               
                <div className='centrar'> <br />
                    <div><span className='titulos2'>Saldo actual:</span></div>
                    <div>💵<IonChip color="success"> ${Intl.NumberFormat("de-DE").format(dato.c[0].v)}</IonChip></div>
                </div>
                <div className='columns'>
                    <div>
                        <div><span className='titulos2'>Total Depositos:</span></div>
                        <div>💵<IonChip color="success"> ${Intl.NumberFormat("de-DE").format(dato.c[1].v)}</IonChip></div>
                        <div><span className='titulos2'>Cantidad Depositos:</span></div>
                        <div>💶<IonChip color="success"> {Intl.NumberFormat("de-DE").format(dato.c[3].v)}</IonChip></div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                        <div><span className='titulos2'>Total Retiros:</span></div>
                        <div>💵<IonChip color="danger"> ${Intl.NumberFormat("de-DE").format(dato.c[2].v)}</IonChip></div>
                        <div><span className='titulos2'>Cantidad Retiros:</span></div>
                        <div>☢️<IonChip color="danger"> {Intl.NumberFormat("de-DE").format(dato.c[4].v)}</IonChip></div>
                    </div>
                </div>
                
                
                {/* <IonLabel><span className='titulos'>Valor:</span> &nbsp;<IonChip color={}>💵 ${Intl.NumberFormat("de-DE").format(dato.c[2].v)}</IonChip>&nbsp;&nbsp;</IonLabel><br />
                <IonLabel><span className='titulos'>Concepto:</span> &nbsp;{dato.c[3].v}&nbsp;&nbsp;</IonLabel><br />
                <IonButton expand="block" href={dato.c[9].v} target="_blanck" color={dato.c[6].v}> Soporte &nbsp;<IonIcon icon={newspaper}></IonIcon> </IonButton>  */}
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

export default DataSaldoDepRet;
