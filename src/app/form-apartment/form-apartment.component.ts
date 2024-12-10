import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';  // Importer ActivatedRoute
import { Apartment } from '../core/models/Apartment';  // Assurez-vous d'importer le modèle Apartment

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent implements OnInit {
  apartForm!: FormGroup;  // Déclaration de apartForm de type FormGroup
  residenceId!: number;   // Variable pour stocker l'ID de la résidence
  newApart: Apartment = new Apartment();  // Propriété pour stocker l'appartement à créer

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la résidence à partir de l'URL
    this.residenceId = Number(this.route.snapshot.params['residenceId']); // Récupérer l'ID de la résidence

    // Initialisation du formulaire avec l'ID de la résidence
    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),  // apartNum doit être numérique
      floorNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),  // floorNum doit être numérique
      surface: new FormControl('', [Validators.required, Validators.min(1)]),  // surface doit être requis et supérieur à 0
      terrace: new FormControl(false),  // terrasse est un boolean
      surfaceterrace: new FormControl('', [Validators.min(0)]),  // surface de terrasse doit être un nombre >= 0
      category: new FormControl('', Validators.required),  // catégorie est requise
      residenceId: new FormControl(this.residenceId, [Validators.required, Validators.min(1)])  // Assigner l'ID de la résidence
    });

    // Rendre la surface de terrasse accessible uniquement si la terrasse est cochée
    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceterrace')?.setValidators([Validators.required, Validators.min(0)]);
      } else {
        this.apartForm.get('surfaceterrace')?.clearValidators();
      }
      this.apartForm.get('surfaceterrace')?.updateValueAndValidity();
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log(this.newApart);  // Tester la récupération des données
      // Ajouter la logique pour envoyer les données du formulaire (API, etc.)
    }
  }

  // Méthode pour vérifier si un champ a une erreur
  getErrorMessage(controlName: string) {
    const control = this.apartForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('pattern')) {
      return 'Please enter a valid number';
    }
    if (control?.hasError('min')) {
      return 'Value must be greater than 0';
    }
    return '';
  }

  // Méthode pour vérifier si un champ est invalide
  isFieldInvalid(controlName: string) {
    const control = this.apartForm.get(controlName);
    return control?.invalid && (control?.touched || control?.dirty);
  }
}
