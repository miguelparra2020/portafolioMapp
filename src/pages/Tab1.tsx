import React from 'react';
import {  IonContent, IonFab, IonFabButton, IonHeader,IonIcon,IonPage  } from '@ionic/react';
// import {   flagOutline } from 'ionicons/icons';

import Toolbar from '../components/Toolbar';
import './Tab1.css';
import DataDepRet from '../components/dataDepRet';
import DataSaldoDepRet from '../components/dataSaldoDepRet';
import { add } from 'ionicons/icons';





const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
      {/* Data Saldo */}
      <DataSaldoDepRet/>
      {/* Data Depositos y Retiros*/}
      <DataDepRet/>
      {/* Data Depositos y Retiros*/}
      <IonFab slot="fixed" horizontal="end" vertical="bottom">
      <IonFabButton href='https://www.appsheet.com/start/01c021af-6861-4716-a17b-28d185b0cbbe' target='_blank'>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
