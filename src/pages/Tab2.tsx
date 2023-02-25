
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonList,
  IonItem,
} from "@ionic/react";
import './Tab2.css';
import Toolbar from "../components/Toolbar";
import DataDepRet from '../components/dataDepRet';



const Tab2: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <DataDepRet/>
        <IonItem>
        </IonItem>
        <IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;


