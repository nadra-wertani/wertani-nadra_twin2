import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'assets/images/image.png', description: '', available: true },
    { id: 2, title: 'Petit électroménager', image: 'assets/images/imagangu1.PNG', description: '', available: true },
    { id: 3, title: 'Produits informatiques', image: 'assets/images/imageangu2.PNG', description: '', available: true },
    { id: 4, title: 'Smart Phones', image: 'assets/images/smartagu.PNG', description: '', available: false },
    { id: 5, title: 'TV, images et son', image: 'assets/images/tv.PNG', description: '', available: true },
    { id: 6, title: 'Produits voiture', image: 'assets/images/voitre.PNG', description: '', available: false }

  ];
  getDescription(description:string){
    alert (description);
  }
  titre : string = "";
}
