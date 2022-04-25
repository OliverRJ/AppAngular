import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthTestService } from '@modules/auth/services/auth-test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});
  constructor(private authService:AuthTestService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',{
        validators:[Validators.required, Validators.email],
        asyncValidators: this.authService.uniqueEmailValidator(),
        updateOn: "blur"  // esta por defecto en change
      }),
      parent: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      aboutMe: new FormControl('', [Validators.required, Validators.minLength(3)]),
      /*password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      passwordConfirm: new FormControl('',[Validators.required])*/
    },
    {
      validators:passwordMatchValidator
    })

    this.registerForm.valueChanges.subscribe((res)=>{
      console.log('👌👌',res)
    })
/* 
    constformControlPhone = this.registerForm.get('phone') as FormControl;
    formControlPhone.valueChanges.subscribe((res)=>{
      console.log('👌👌',res)
    })
*/
  }

  testLoader():void{
    const mockData = {
      email: 'test@gmail.com',
      name: 'oliver',
      lastName: 'rz',
      phone: '343434',
      aboutMe:'hola soy angular dev'
    }
    this.registerForm.setValue(mockData);
  }
  testUpLoaded():void{
    const mockData = {
      phone: '111111'
    }
    this.registerForm.patchValue(mockData);
  }
}

function passwordMatchValidator(g:AbstractControl | FormGroup):any{
  return g.get('password')?.value === g.get('passwordConfirm')?.value? null : {'mismatch': true};
   
}