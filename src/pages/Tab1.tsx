import React from 'react';
import {  IonContent, IonHeader,IonPage  } from '@ionic/react';
// import {   flagOutline } from 'ionicons/icons';

import Toolbar from '../components/Toolbar';
import './Tab1.css';
import DataDepRet from '../components/dataDepRet';
import DataSaldoDepRet from '../components/dataSaldoDepRet';





const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
      <DataSaldoDepRet/>
      {/* Data Depositos y Retiros*/}
      <DataDepRet/>
      {/* Data Depositos y Retiros*/}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
