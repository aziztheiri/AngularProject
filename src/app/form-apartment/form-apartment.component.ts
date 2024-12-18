import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';  
import { Apartment } from '../core/models/Apartment'; 

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent implements OnInit {
  apartForm!: FormGroup;  
  residenceId!: number;  
  newApart: Apartment = new Apartment();  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.params['residenceId']); 

    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),  
      floorNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),  
      surface: new FormControl('', [Validators.required, Validators.min(1)]), 
      terrace: new FormControl(false),  
      surfaceterrace: new FormControl('', [Validators.min(0)]),  
      category: new FormControl('', Validators.required),  
      residenceId: new FormControl(this.residenceId, [Validators.required, Validators.min(1)])  
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceterrace')?.setValidators([Validators.required, Validators.min(0)]);
      } else {
        this.apartForm.get('surfaceterrace')?.clearValidators();
      }
      this.apartForm.get('surfaceterrace')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log(this.newApart);  
      
    }
  }

 
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

 
  isFieldInvalid(controlName: string) {
    const control = this.apartForm.get(controlName);
    return control?.invalid && (control?.touched || control?.dirty);
  }
}
