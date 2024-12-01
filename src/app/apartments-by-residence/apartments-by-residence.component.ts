import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../core/models/Apartment';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent  {
  listApartments = [
    { apartNum: 101, floorNum: 1, surface: 120, terrace: true, surfaceterrace: 20, category: 'Luxury', ResidenceId: 1 },
    { apartNum: 102, floorNum: 2, surface: 100, terrace: false, surfaceterrace: 0, category: 'Standard', ResidenceId: 1 },
    { apartNum: 201, floorNum: 1, surface: 80, terrace: true, surfaceterrace: 10, category: 'Economic', ResidenceId: 2 },
  ];

  residenceId!: number;
  filteredApartments!:Apartment[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la résidence depuis l'URL
    this.residenceId = Number(this.route.snapshot.params['residenceId']);

    // Filtrer les appartements appartenant à cette résidence
    this.filteredApartments = this.listApartments.filter(
      (apartment) => apartment.ResidenceId === this.residenceId
    );
  }
}
