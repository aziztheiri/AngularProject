import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {

  addResidenceForm!: FormGroup;

  // Liste des options de statut
  statuses = ['Disponible', 'En Construction', 'Vendu'];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // Initialiser le formulaire avec FormBuilder
    this.addResidenceForm = this.fb.group({
      id: [null], // Champ caché, non requis
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/^(https?:\/\/[^\s]+)$/)]], // Validation URL
      status: ['Disponible', Validators.required]
    });
  }

  // Récupérer les erreurs pour chaque champ
  getErrorMessage(controlName: string): string {
    const control = this.addResidenceForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Ce champ est obligatoire';
    } else if (control?.hasError('minlength')) {
      return 'Le nom doit contenir au moins 3 caractères';
    } else if (control?.hasError('pattern')) {
      return 'L\'URL de l\'image n\'est pas valide';
    }
    return '';
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.addResidenceForm.valid) {
      const newResidence = this.addResidenceForm.value;
      console.log(newResidence); // Log temporaire pour tester la soumission
      // Redirection après soumission
      this.router.navigate(['/residences']);
    }
  }

  // Vérifier si un champ est invalide
  isFieldInvalid(fieldName: string): boolean {
    const field = this.addResidenceForm.get(fieldName);
    return field ? field.invalid && field.touched : false; 
  }
 
}
