import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"sala-juegos-e46aa","appId":"1:160629021929:web:774ddf7c34e4e4bf592478","storageBucket":"sala-juegos-e46aa.appspot.com","apiKey":"AIzaSyAv4G05PiQubu0wGhHdHw5scABK0FAVVPU","authDomain":"sala-juegos-e46aa.firebaseapp.com","messagingSenderId":"160629021929"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"sala-juegos-e46aa","appId":"1:160629021929:web:d78d005d1a9375ed592478","storageBucket":"sala-juegos-e46aa.appspot.com","apiKey":"AIzaSyAv4G05PiQubu0wGhHdHw5scABK0FAVVPU","authDomain":"sala-juegos-e46aa.firebaseapp.com","messagingSenderId":"160629021929"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
