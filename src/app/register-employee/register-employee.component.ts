import { Component } from '@angular/core';
import { Employee } from '../employee';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

  employee : Employee = new Employee();

constructor(private authService: AuthService, private router: Router){}

  onSubmit()
  {
    this.authService.register(this.employee).subscribe(
      data=>
      {
        console.log('SUCCESS',data);
        alert("User details saved successfully!");
        this.goToEmployeeList();
      }
    );
  }

  goToEmployeeList()
  {
    this.router.navigate(['empList']);
  }

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      salary: new FormControl("",[Validators.required,Validators.min(5000)]),
      contact: new FormControl("",[Validators.required,Validators.pattern("[6789]{1}[0-9]{9}$")]),
      email: new FormControl("",[Validators.required,Validators.email]),
      desg : new FormControl("",[Validators.required,Validators.minLength(2)]),
      user: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      pass: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      doj: new FormControl("",[Validators.required])
    }
  );

    get f()
    {
      return this.form.controls;
    }

}
