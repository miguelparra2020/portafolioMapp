import { IonContent, IonHeader, IonPage,  IonToolbar } from '@ionic/react';
import Toolbar from '../components/Toolbar';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
