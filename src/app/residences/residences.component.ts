import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { Router } from '@angular/router';
import { CommonService } from '../core/Services/common.service';
import { ResidenceService } from '../core/Services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  constructor( private router: Router ,private cc : CommonService,private rs : ResidenceService) {}
  ngOnInit(){
 
   // this.rs.deleteResidence(1).subscribe(res=>this.listResidences.filter==1))
  console.log( this.cc.getSameValueOf(this.listResidences,"status","Disponible")) ;
  this.rs.getResidenceList().subscribe(res=>this.listResidences=res)
  }
  search_item:string="";
  listResidences : Residence[]=[]
  favoris: Residence[] = [];

  showLocation(adress: string) {
    if (adress === 'inconnu') {
      alert("l'adresse est inconnu");
    } else {
      alert("l'adresse est" + adress);
    }
  }

  addFavorite(residence: Residence) {
    if (!this.favoris.includes(residence)) {
      this.favoris.push(residence);
    }
    console.log(this.favoris);
  }
filtreByAddress(){
  return this.listResidences.filter(residance=> residance.address.toLowerCase().includes(this.search_item.toLowerCase()))
}
createResidence(){
  this.router.navigate(['/addResidence']); 
}

}
