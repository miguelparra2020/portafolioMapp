import './Toolbar.css';
import { IonAvatar, IonToolbar, IonTitle,IonImg } from '@ionic/react';
const Toolbar: React.FC = () => {
    return (
        <div id="toolbar">
            <IonToolbar>
                <IonAvatar slot="start" id='avatar'>
                    <IonImg src="/assets/img/icon.jpg" id='img'></IonImg>
                </IonAvatar>
                <IonTitle>Credifamiliar</IonTitle>
            </IonToolbar>
        </div>
    );
};
export default Toolbar;