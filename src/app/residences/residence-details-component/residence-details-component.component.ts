import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/Residence';

@Component({
  selector: 'app-residence-details-component',
  templateUrl: './residence-details-component.component.html',
  styleUrls: ['./residence-details-component.component.css']
})
export class ResidenceDetailsComponentComponent implements OnInit {
  constructor(private act: ActivatedRoute, private router: Router) {}
  
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' },
  ];
  
  id!: number;
  residenceItem!: Residence[];

  ngOnInit() {
    this.id = Number(this.act.snapshot.params['idR']);
    this.updateResidenceItem();
    if (this.residenceItem.length === 0) {
      // If no residence matches the ID, redirect to NotFoundComponent
      this.router.navigate(['/not-found']);
    }
  }

  updateResidenceItem() {
    this.residenceItem = this.listResidences.filter((p) => p.id === this.id);
  }

  goToNextResidence() {
    const currentIndex = this.listResidences.findIndex((res) => res.id === this.id);
    if (currentIndex !== -1 && currentIndex < this.listResidences.length - 1) {
      this.id = this.listResidences[currentIndex + 1].id;
      this.router.navigate(['/residences', this.id]);
      this.updateResidenceItem();
    }  
    
    
  }
  goToAddResidence() {
    this.router.navigate(['/add-residence']);
  }

  goToUpdateResidence() {
    this.router.navigate(['/add-residence'], { queryParams: { id: this.id } });
  }
}
