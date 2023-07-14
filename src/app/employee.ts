import { User } from "./user";

export class Employee extends User{

    empName !: string;
    salary !: number;
    contact !: string;
    email !: string;
    designation !: string;
    doj : any;

    constructor()
    {
        super();
    }


}
