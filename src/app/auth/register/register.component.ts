import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { ConfirmPasswordValidator } from './../confirm-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showError: boolean = false;
  registerData: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.pattern(/^[\S]{3,}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern(
            /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      addresses: this.fb.array([
        // this.fb.group({
        //   address: ['', [Validators.required]],
        //   street: ['', [Validators.required]],
        //   city: ['', [Validators.required]],
        //   country: ['', [Validators.required]],
        // }),
      ]),
    },
    { validators: ConfirmPasswordValidator('password', 'confirmPassword') }
  );

  addAddress(): void {
    this.addressArray.push(
      this.fb.group({
        address: ['', [Validators.pattern(/^[a-zA-Z0-9]+$/)]],
        street: ['', [Validators.pattern(/^[a-zA-Z0-9]+$/)]],
        city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        country: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      })
    );
  }

  removeAddress(index: number): void {
    this.addressArray.removeAt(index);
  }
  get addressArray(): FormArray {
    return (<FormArray>this.controlValidators['addresses']) as FormArray;
  }

  submitData() {
    if (this.registerData.valid) {
      console.log(this.registerData);
    } else {
      this.showError = true;
    }
  }
  get controlValidators() {
    console.log(this.registerData.controls);

    return this.registerData.controls;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    validator: ConfirmPasswordValidator('password', 'confirmPassword');
  }
}
