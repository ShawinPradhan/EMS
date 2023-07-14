import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  employee !: Employee;
id !: number;

constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}
  
ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.getEmpById(this.id).subscribe(
      data=>
      {
        this.employee =data;
      }
    );
  }

onSubmit()
{
  this.authService.updateEmployee(this.id, this.employee).subscribe(
    data=>
    {
      console.log('Updated successfully',data);
      alert('Employee details updated successfully!');
      this.router.navigate(['empList']);
    },
    err=>
    {
      console.log('FAILURE', err);
      alert('Something went wrong!!');
    }
  );
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
