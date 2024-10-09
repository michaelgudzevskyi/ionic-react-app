"use client"; 

import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import IonicProvider from './components/IonicProvider';

export default function Home() {
  return (
    <IonicProvider>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic with Next.js</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="block" color="primary">Click Me</IonButton>
      </IonContent>
    </IonicProvider>
  );
}