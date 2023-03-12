import React, { useState } from 'react';
import {  IonAvatar,  IonChip, IonContent,  IonHeader,IonPage  } from '@ionic/react';
// import {   flagOutline } from 'ionicons/icons';

import Toolbar from '../components/Toolbar';
import './Tab1.css';
import Tab3EstudioFrances from '../components/Tab3EstudioFrances';
import Tab3EstudioEnglish from '../components/Tab3EstudioEnglish';
import Tab3EstudioEspanol from '../components/Tab3EstudioEspanol';

const Tab3: React.FC = () => {
  const [ingles, setIngles] = useState(0);
  const [frances, setFrances] = useState(1);
  const [espanol, setEspanol] = useState(1);
  const toggleIngles = () => {
    setIngles(0);
    setFrances(1);
    setEspanol(1);
  };
  const toggleFrances = () => {
    setIngles(1);
    setFrances(0);
    setEspanol(1);
  };
  const toggleEspanol = () => {
    setIngles(1);
    setFrances(1);
    setEspanol(0);
  };
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
        <div className='content'>
          <div className='idiomas'>
            <div> <IonChip onClick={toggleIngles} outline={true} color="primary" ><IonAvatar ><img alt="Bandera inglesa" src="https://res.cloudinary.com/ddllgbo70/image/upload/v1678041583/assetsPortafolioMiguelPaez/icons8-usa-96_qlobg9.png"/>
            </IonAvatar>&nbsp; English</IonChip></div> &nbsp;
            <div><IonChip onClick={toggleFrances}  outline={true} color="primary"><IonAvatar ><img alt="Bandera francesa" src="https://res.cloudinary.com/ddllgbo70/image/upload/v1678041641/assetsPortafolioMiguelPaez/icons8-france-96_k9vxrq.png"/>
            </IonAvatar>&nbsp; Français</IonChip></div>&nbsp;
            <div><IonChip onClick={toggleEspanol} outline={true} color="primary"><IonAvatar ><img alt="Bandera española" src="https://res.cloudinary.com/ddllgbo70/image/upload/v1678041782/assetsPortafolioMiguelPaez/icons8-spain-96_aeeghe.png"/>
            </IonAvatar>&nbsp; Español</IonChip></div>
          </div>
          <div id="inglesContent">
              {ingles ? null : (
                <div>
                  <Tab3EstudioEnglish/>
                </div>
              )}
          </div>
          <div id='francesContent'>
            {frances ? null : (
                <div>
                  <Tab3EstudioFrances/>
                </div>
              )}</div>
          <div id='espanolContent'>
          {espanol ? null : (
                <div>
                  <Tab3EstudioEspanol/>
                </div>
              )}
          </div>
    </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
