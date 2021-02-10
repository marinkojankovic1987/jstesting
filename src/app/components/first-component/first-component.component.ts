import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styles: [
  ]
})
export class FirstComponentComponent implements OnInit {
  form: FormGroup;
  message: string;
  serviceVariable:string;
  constructor(private fb: FormBuilder, private appService:AppService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.serviceVariable = this.appService.get();
  }

  submit(): void {
    this.message = '';
    if (!this.form.valid) { this.message = 'error'; return };
    this.message = 'ok';
    console.log('submit');
  }

}
