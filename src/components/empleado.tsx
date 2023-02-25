import React from "react";
import {IonItem, IonLabel } from '@ionic/react';
import {Person}  from './../models/person.model'

const Empleado: React.FC <{person: Person}> = ({person}) => {
    return (
        <IonItem>
                <h2>{person.id}</h2>
                <p>{person.name}</p>
            
        </IonItem>
    );

}

export default Empleado;