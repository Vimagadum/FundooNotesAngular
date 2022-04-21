import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide: boolean = true;
  registerForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
  });
  }
  onSubmit(){
    if(this.registerForm.valid)
    {
      console.log("validInput");
      
      let data={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.userservice.register(data).subscribe((res) => {
        console.log(res);
        localStorage.setItem('first',JSON.stringify(this.registerForm.value.firstName) )
        localStorage.setItem('last',JSON.stringify(this.registerForm.value.lastName) )

      })      
    }
    else{
      console.log("invalid input");      
    }
  }
  showPassword() {
    this.hide = !this.hide;
 }
}
