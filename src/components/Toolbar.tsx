import './Toolbar.css';
import { IonAvatar, IonToolbar, IonTitle,IonImg } from '@ionic/react';
const Toolbar: React.FC = () => {
    return (
        <div id="toolbar">
            <IonToolbar>
                <IonAvatar slot="start" id='avatar'>
                    <IonImg src="https://res.cloudinary.com/ddllgbo70/image/upload/v1638329235/assetsPortafolioMiguelPaez/miguelFoto400x400Webp_pfpnps.webp" id='img'></IonImg>
                </IonAvatar>
                <IonTitle>Miguel Páez</IonTitle>
            </IonToolbar>
        </div>
    );
};
export default Toolbar;