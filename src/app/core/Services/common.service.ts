import { Injectable } from '@angular/core';
import { Residence } from '../models/Residence';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  getSameValueOf(list:any[], criteria:string, value:any){
   let nb = 0
   for(let l in list){
    if(list[l][criteria]==value){
      nb++;
    }
   }
   return nb ;
  }
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];
  getResidenceList(){
    return this.listResidences;
  }
}
