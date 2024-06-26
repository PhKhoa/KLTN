import { Career } from "./career.model";
import { Company } from "./company.model";
import { Field } from "./field.model";
import { Recruiter } from "./recruiter.model";
import { Recruitment } from "./recruitment.model";
import { ServicePackage } from "./service-package.model";


export interface Job{
    _id: string;
    JobId: string,
    Name: string,
    Description: string,
    Address: string
    Location: string[],
    Requirement :string,
    Salary: string,
    Welfare: string[],
    Career: Career,
    Recruiter: Recruiter,
    Recruitment: Recruitment[],
    Field: Field,
    StartDate: Date,
    EndDate: Date,
    ServicePackage: ServicePackage,
    StatusPayment: boolean,
    Tags: string[],
    Priority: number,
    Hot: boolean,
    ColorTitle: boolean,
    Urgent: boolean,
    ImageOfCompany: string,
    Company: Company,
    StartSalary: number,
    EndSalary: number,
        createdAt: Date;
        updateAt: Date;
}