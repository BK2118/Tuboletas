import { Component } from '@angular/core';

import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-categories',

  templateUrl: './categories.page.html',

  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  categories: any;
  buscador: string = '';

  constructor(private events: EventsService) {}

  ionViewDidEnter() {
    this.getCategories();
  }
  getCategories() {
    this.events.getCategories().then((res) => {
      this.categories = res;
      console.log('Categorias desde el servidor', this.categories);
    });
  }

  getCategory(id: string) {
    this.events.getCategory(id).then((res) => {
      this.categories = [res];
      console.log('Categoria filtrada', this.categories);
    });
  }
}
