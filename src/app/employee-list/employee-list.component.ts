import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] | undefined;

constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
  this.getAllEmployees();
}

getAllEmployees()
{
  this.authService.getAllEmployees().subscribe(
    data=>{
      this.employees = data;
    }
  );
}

deleteEmpById(id: number)
{
  this.authService.deleteEmpById(id).subscribe(
    data=>
    {
      console.log('SUCCESS',data);
      alert('Employee with id '+id+' has been deleted successfully');
      window.location.reload();
    },
    err=>
    {
      console.log('FAILURE',err);
      alert('Something went wrong!');
      window.location.reload();
    }
  );
}

updateEmp(id: number)
{
  this.router.navigate(['updateEmp',id]);
}

viewEmp(id: number)
{
  this.router.navigate(['viewEmp',id]);
}

}
