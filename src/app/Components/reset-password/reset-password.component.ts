import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({  
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required]
  });
  }
  onSubmit(){
    if(this.resetForm.valid)
    {
      console.log("validInput");
      
      let data={
        
        password:this.resetForm.value.password,
        confirmPassword:this.resetForm.value.cpassword
      }
      this.userservice.reset(data).subscribe((res) => {
        console.log(res);
        
      })
      
    }
    else{
      console.log("invalid input");
      
    }
  }

}
