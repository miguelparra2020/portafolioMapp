
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
} from "@ionic/react";
import './Tab2.css';

import MiComponente from '../components/theComponent';


const Tab2: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <MiComponente/>
        <IonItem>
        </IonItem>
        <IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;


