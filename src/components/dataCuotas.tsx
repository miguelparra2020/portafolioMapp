// import { IonButton, IonChip, IonIcon, IonLabel } from '@ionic/react';
// import { newspaper } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import './dataDepRet.css';

import { DATACUOTAS } from '../environment'
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel } from '@ionic/react';
import { logoWhatsapp } from 'ionicons/icons';

function DataCuotas() {


    const [datos, setDatos] = useState<any>(null);

    async function obtenerDatos() {
        const respuesta = await fetch(DATACUOTAS);
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
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        <IonChip>
                                            <IonAvatar>
                                                <img alt="Img Entidad" src={dato.c[8].v} />
                                            </IonAvatar>
                                        </IonChip>
                                        Inversionista: {dato.c[3].v}, celular: {dato.c[4].v}, correo: {dato.c[5].v}, id:{dato.c[6].v},
                                        entidad: {dato.c[7].v}
                                    </IonCardSubtitle>
                                    <IonCardTitle>Id Cuota: <IonLabel color="primary">{dato.c[1].v}</IonLabel> <br />
                                        Número de Cuota: <IonLabel color="secondary">{dato.c[20].v}</IonLabel><br />
                                        Estado: <IonLabel color="success">{dato.c[2].v}</IonLabel><br />
                                        Fecha del Pago: 📆<IonLabel color="danger">{dato.c[0].f}</IonLabel>  <br />
                                        valor a recibir como inversionista: <IonChip color="success">💵 ${Intl.NumberFormat("de-DE").format(dato.c[26].v)}&nbsp;&nbsp;</IonChip>
                                    </IonCardTitle>

                                </IonCardHeader>

                                <IonCardContent>
                                    <IonCard>
                                        <IonCardContent>
                                            <IonCardTitle>Cliente deudor:</IonCardTitle>
                                            <IonCardSubtitle>
                                                💳 id cliente: {dato.c[10].v} <br />
                                                🧑‍🤝‍🧑 Nombre: {dato.c[11].v} <br />
                                                📱 Celular: {dato.c[12].v} <a href={`https://api.whatsapp.com/send?phone=57${dato.c[12].v}&text=Hola%2C%20Cordial%20Saludo.%20Sr(a)%20${dato.c[11].v}%20%F0%9F%91%8B%0ATe%20hablo%20de%20parte%20de%20la%20entidad%3A%20%F0%9F%8F%A6%20${dato.c[7].v}.%0APara%20que%20puedas%20hacer%20el%20pago%20f%C3%A1cil%20y%20oportunamente%20del%20cr%C3%A9dito%20vigente.%0A%0A%F0%9F%91%89Cr%C3%A9dito%20id%20Cuota%3A%20${dato.c[1].v}.%20N%C3%BAmero%20de%20Cuota%3A%20${dato.c[20].v}.%20Fecha%20de%20pago%3A%20${dato.c[0].f}.%20Valor%20a%20pagar%3A%20%F0%9F%92%B5%20${Intl.NumberFormat("de-DE").format(dato.c[25].v)}.%20%0A%F0%9F%91%89Forma%20de%20Pago%3A%20%F0%9F%92%B0Transfiya%3A%20${dato.c[27].v}.%20%C3%B3%20al%20banco%3A%F0%9F%92%B0%20${dato.c[28].v}%2C%20%20%C3%B3%20al%20banco%3A%20%F0%9F%92%B0%0A%20${dato.c[29].v}.%0A%F0%9F%91%89Si%20deseas%20hacer%20el%20pago%20por%20PSE%2C%20este%20tiene%20un%20costo%20transaccional%20de%20%241.000%20pesos%2C%20me%20indicas%20y%20te%20genero%20el%20Link.%20%20Transfiya%20y%20los%20otros%20medios%20no%20tienen%20costo.%0A%F0%9F%91%89%20Al%20realizar%20el%20pago%F0%9F%92%AF%2C%20por%20favor%20adjuntarme%20comprobante%20del%20pago%2C%20en%20imagen%2C%20pantallazo%20o%20documento%20pdf.%20Te%20agradecemos%20mucho%20su%20Pronto%20pago.`} target="_blank"><IonChip>
                                                    Cobrar <IonIcon icon={logoWhatsapp} color="success" ></IonIcon></IonChip></a>
                                            </IonCardSubtitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCardContent>
                            </IonCard>


                            {/* {dato.c[1].v}&nbsp;&nbsp;
                {dato.c[2].v}&nbsp;&nbsp;
                {dato.c[3].v}&nbsp;&nbsp;
                {dato.c[4].v}&nbsp;&nbsp;
                {dato.c[5].v}&nbsp;&nbsp;
                {dato.c[6].v}&nbsp;&nbsp;
                {dato.c[7].v}&nbsp;&nbsp;
                {dato.c[8].v}&nbsp;&nbsp;
                {dato.c[9].v}&nbsp;&nbsp;
                {dato.c[10].v}&nbsp;&nbsp;
                {dato.c[11].v}&nbsp;&nbsp;
                {dato.c[12].v}&nbsp;&nbsp;
                {dato.c[13].v}&nbsp;&nbsp;
                {dato.c[14].v}&nbsp;&nbsp;
                {dato.c[15].v}&nbsp;&nbsp; */}

                        </div>
                    ))}
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
}

export default DataCuotas;
