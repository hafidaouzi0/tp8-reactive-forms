import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent  implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    comment: new FormControl('', Validators.required)
  });
  get f() {
    return this.form.controls;
  }
  submit() {
    if (this.form.status === 'VALID') {
      console.log(this.form.value);
    }
  }
  setValue() {
    this.form.setValue({ name: 'ABBOU HASSANE', email: 'abbouhassane@gmail.com', phone:
        '', comment: 'Exemple pour Reactive Forms' });
  }
  resetValue() {
    this.form.reset({ name: '', email: '', phone: '', comment: '' });
  }

}
