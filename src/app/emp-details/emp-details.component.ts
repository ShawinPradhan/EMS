import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  employee !: Employee;
id !: number;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
   this.id =this.route.snapshot.params['id'];
   this.authService.getEmpById(this.id).subscribe(
    data=>
    {
      this.employee=data;
    }
   );
  }

list()
{
  this.router.navigate(['empList']);
}

}
