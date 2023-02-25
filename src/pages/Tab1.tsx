import React, { useState } from 'react';
import {  IonContent, IonHeader,    IonLabel,    IonPage, IonSegment, IonSegmentButton,   } from '@ionic/react';
// import {   flagOutline } from 'ionicons/icons';
import Iframe from 'react-iframe';
import Toolbar from '../components/Toolbar';
import './Tab1.css';






const Tab1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
      <IonSegment color="primary" value="primary">
        <IonSegmentButton value="primary">
          <IonLabel>Saldo Actual</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Depositos y Retiros</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {/* Data */}
      
      <Iframe url="https://www.appsheet.com/start/3de2a3cc-0502-40d0-9db3-8dc1702fa648"
                width="100%"
                height="90%"
                id=""
                allowFullScreen 
                styles={{border: "0px"}}
                className=""
                display="block"
                position="relative"/>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
