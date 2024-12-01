import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  listApartments = [
    { apartNum: 101, floorNum: 1, surface: 120, terrace: true, surfaceterrace: 20, category: 'Luxury', ResidenceId: 1 },
    { apartNum: 102, floorNum: 1, surface: 100, terrace: false, surfaceterrace: 0, category: 'Standard', ResidenceId: 1 },
  ];

  constructor(private router: Router) {}

  createApartment() {
    this.router.navigate(['/create-apartment']); 
  }
}
