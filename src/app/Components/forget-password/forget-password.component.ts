import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {

  this.forgetForm = this.formBuilder.group({  
    email: ['', [Validators.required, Validators.email]],
  });
  }
  onSubmit(){
    if(this.forgetForm.valid)
    {
      console.log("validInput");
      
      let data={
        
        email:this.forgetForm.value.email,
      }
      this.userservice.forget(data).subscribe((res) => {
        console.log(res);
        
      })
      
    }
    else{
      console.log("invalid input");
      
    }
}
}

