
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonHeader,  IonIcon,  IonLabel,  IonModal,  IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import './Tab1.css';
// import {   flagOutline } from 'ionicons/icons';
import Toolbar from '../components/Toolbar';
import { add } from 'ionicons/icons';
import React, { useState } from 'react';


const Tab1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Ingresar el arreglo de todos los depositos
  let depositos = [{id:1,fecha:"15-02-2023",valor:50000,concepto:"Ingreso de Dinero para prestar", comprobante: "https://www.facebook.com/"},{id:2,fecha:"20-02-2023",valor:30000,concepto:"Pago Cuota N1. Credito DD01 a nombre de Jennifer", comprobante: "https://www.instagram.com/"}];
  let depositosRevertidos = depositos.reverse();
  // Total Depositos
  let depositosMap = depositos.map(item => item.valor);
  let totalDepositos = depositosMap.reduce((a, b) => a + b, 0);
  //Ingresar el arreglo de todos los retiros
  let retiros = [{id:1,fecha:"15-02-2023",valor:20000,concepto:"Retiro de Dinero para Pagar Cosas", comprobante: "https://www.instagram.com/"},{id:2,fecha:"20-02-2023",valor:10000,concepto:"Retiro de Dinero a Solicitud", comprobante: "https://www.facebook.com/"}];
  let retirosRevertidos = retiros.reverse();
  // Total Retiros
  let retirosMap = retiros.map(item => item.valor);
  let totalRetiros = retirosMap.reduce((a, b) => a + b, 0);
  // Saldo actual
  let sal = totalDepositos-totalRetiros;
  let saldo = new Intl.NumberFormat('de-DE').format(sal);

  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
        {/* Header Saldo Actual */}
        <div className='div_saldo_actual'>
        <div className='Titulo'>
          <h1>
          Saldo Actual
          </h1>
        </div>
        <div className='Titulo_Valor'>
          <h3>
          <IonChip color="success">
          ${saldo}
          </IonChip>
          </h3>
        </div>
        </div>
        {/* Header Saldo Actual */}
        {/* Contenedor */}
        <div className='contenedor_dep_reti'>
          {/* Depositos */}
          <div className='contenedor_depositos'>
          <IonCard >
            <IonCardHeader>
              <IonCardTitle>Depositos</IonCardTitle>
              <IonCardSubtitle>Total depositos: <br /><IonLabel color="success">💵 ${new Intl.NumberFormat('de-DE').format(totalDepositos)}</IonLabel></IonCardSubtitle>
              

            </IonCardHeader>
            <IonCardContent>
              {
                depositosRevertidos.map(item =>
                  <div className='contenido_depo'>
                  <IonLabel>Id:{item.id}</IonLabel>
                  <br />
                  <IonLabel>Fecha:{item.fecha}</IonLabel>
                  <br />
                  <IonLabel>Valor:</IonLabel>
                  <IonChip color="success">
                    💵 ${new Intl.NumberFormat('de-DE').format(item.valor)}
                  </IonChip >
                  <br/>
                  <IonLabel>Concepto:{item.concepto}</IonLabel>
                  <IonButton expand="block" color="success" href={item.comprobante} target="_blank">Soporte</IonButton>
                  </div>
                )
              }
            </IonCardContent>
          </IonCard>          
          </div>
          {/* Depositos */}
          {/* Retiros */}
          <div className='contenedor_retiros'>
          <IonCard >
            <IonCardHeader>
              <IonCardTitle>Retiros</IonCardTitle>
              <IonCardSubtitle>Total retiros: <br /><IonLabel color="danger">💵 ${new Intl.NumberFormat('de-DE').format(totalRetiros)}</IonLabel></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {
                retirosRevertidos.map(item =>
                  <div className='contenido_reti'>
                  <IonLabel>id:{item.id}</IonLabel>
                  <br />
                  <IonLabel>fecha:{item.fecha}</IonLabel>
                  <br />
                  <IonLabel>Valor:</IonLabel>
                  <IonChip color="danger">
                    💵 ${new Intl.NumberFormat('de-DE').format(item.valor)}
                  </IonChip >
                  <br/>
                  <IonLabel>Concepto:{item.concepto}</IonLabel>
                  <IonButton expand="block" color="danger"  href={item.comprobante} target="_blank">Soporte</IonButton>
                  </div>
                )
              }
            </IonCardContent>
          </IonCard>     
          </div>
        </div>
  
        {/* Contenedor */}

        {/* Fab añadir */}
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={() => setIsOpen(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
            
        {/* Modal de Ejemplo */}

        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Depositos o Retiros</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
          <Iframe url="https://www.appsheet.com/start/33e88794-aa19-4bc4-8699-c2824835688d"
                width="100%"
                height="100%"
                id=""
                allowFullScreen 
                styles={{border: "0px"}}
                className=""
                display="block"
                position="relative"/>
          </IonContent>
        </IonModal> 
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
