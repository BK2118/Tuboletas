import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService,
    private menu: MenuController
  ) {}
  openMenu() {
    this.menu.open('custom-menu');
  }

  ionViewDidEnter() {
    this.events.getEvents().then((res) => {
      this.event_list = res;
      console.log('Eventos desde el servidor', this.event_list);
    });
    console.log('Local Events', this.events.getLocalEvents().events);
  }

  goToIntro() {
    console.log('go to intro');
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
}
