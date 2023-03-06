
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import './Tab2.css';
import Toolbar from "../components/Toolbar";
// import DataCuotas from '../components/dataCuotas';



const Tab2: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <Toolbar/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {/* <DataCuotas/> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;


