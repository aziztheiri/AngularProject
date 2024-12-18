import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
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
  constructor(private httpservice :HttpClient ) { }
  getResidenceList(){
    return this.httpservice.get<Residence[]>('http://localhost:3000/residences');
  }
  addResidence(r:Residence){
   return  this.httpservice.post('http://localhost:3000/residences',r)
  }
  deleteResidence(id:number){
   return  this.httpservice.delete('http://localhost:3000/residences'+'/'+id)
  }
}
