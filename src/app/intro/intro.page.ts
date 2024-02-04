import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  slides = [
    {
      title: 'JUANES COLOMBIA',
      description:
        'El parcero de Colombia recorrerá su país en una gira nacional por cinco ciudades luego de un año apoteósico para su carrera cuatro nominaciones gramófonos en los Latin Grammy 2023 estableciendo un nuevo récord como el artista solista latinoamericano con más nominaciones y estatuillas en la historia de estos importantes premios.',
      image: 'https://tuboleta.com/imagenes/65a06fe9e2c98.webp',
      class: 'slide-1 ',
    },
    {
      title: 'Steven Patrick Morrissey',
      description:
        'El maravilloso Steven Patrick Morrissey cumplirá su promesa en vivocon Colombia el próximo 10 de febrero en el Movistar Arena de Bogotá,para celebrar una fecha con todos',
      image: 'https://tuboleta.com/imagenes/650dba07b8cc3.webp',
      class: 'slide-2',
    },
    {
      title: 'sssss',
      description:
        'The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
      image: '../../assets/images/3.webp',
      help_text:
        "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: 'slide-3',
    },
    {
      title: 'JUANES COLOMBIA',
      description:
        'Morat celebrará en Bogotá por 2, luego de agotar un estadio El Campín en 12 horas, ahora anuncia una nueva fecha el 7 de Julio de 2024,cuando la banda Bogotá Morat rompa récords en su ciudad con 2 Estadios El Campín.',
      image:
        'https://infolocal.comfenalcoantioquia.com/media/com_jbusinessdirectory/pictures/events/12643/morat.jpg',
      class: 'slide-4',
    },
  ];

  constructor() {}

  ionViewDidEnter() {
    console.log('Ya entre y vi la intro');
    // Vamos a guardar en el storage que ya vio la intro
  }
}
