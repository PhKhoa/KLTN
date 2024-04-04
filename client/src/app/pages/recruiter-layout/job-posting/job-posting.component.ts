import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';
import { ServicePackageState } from '../../../ngrx/states/service-package.state';
import { jobState } from '../../../ngrx/states/job.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import * as ServicePackageActions from '../../../ngrx/actions/service-package.actions';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';
import { ServicePackage } from '../../../models/service-package.model';
import { Job } from '../../../models/job.model';
import { generateUuid } from '../../../../environments/environments';

const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];
@Component({
  selector: 'app-job-posting',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.less'
})
export class JobPostingComponent implements OnDestroy{

  subscriptions: Subscription[] = [];



  //ngrx of career
  careerTakenByGetAllAtCreateJob$ = this.store.select('career', 'careersTakenByGetAllAtCreateJob');
  careerTakenByFieldAtCreateJob$ = this.store.select('career', 'careersTakenByGetByFieldAtCreateJob');

  //ngrx of field
  fieldNoLimitAtCreateJob$ = this.store.select('field', 'fieldNoLimitAtCreateJob');

  //ngrx of field
  servicePackageTakenByGetAllAtCreateJob$ = this.store.select('servicePackage', 'servicePackagesTakenByGetAllAtCreateJob');

  //ngrx of job
  isCreateJobAtJob$ = this.store.select('job', 'isCreateJobAtCreateJobSuccess');

  // Lấy timestamp hiện tại
  timestamp = Date.now();

  // Khởi tạo Date object từ timestamp
  date = new Date(this.timestamp);

  // Lấy ngày, tháng, năm từ Date object
  day = this.date.getDate();
  month = this.date.getMonth(); 
  year = this.date.getFullYear();

  jobPostForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Location: new FormControl('', [Validators.required]),
    
    Salary: new FormControl('', [Validators.required]),
    SalaryStart: new FormControl('', [Validators.required]),
    SalaryEnd: new FormControl('', [Validators.required]),
    Negotiate: new FormControl(false),

    Requirement: new FormControl('', [Validators.required]),
    Career: new FormControl('', [Validators.required]),
    Field: new FormControl('', [Validators.required]),
    DateStart: new FormControl(new TuiDay(this.year, this.month, this.day)),
    DateEnd: new FormControl(new TuiDay(this.year, this.month, this.day)),
    
    Walfare: new FormControl('', [Validators.required]),
    Tag: new FormControl('', [Validators.required]),
    ServicePakage: new FormControl('', [Validators.required]),

  });


  fields: Field[] = [];
  careers: Career[] = [];
  servicePackages: ServicePackage[] = [];
  nameOffields: readonly string[] = [];
  nameOfCareers: readonly string[] = [];
  nameOfServicePackages: readonly string[] = [];



  constructor(
    private router: Router,
    private store: Store<{
      field: FieldState;
      career: CareerState;
      servicePackage: ServicePackageState;
      job: jobState;
    }>
    ) {
      //get all career, field, servicePackage
      this.store.dispatch(CareerActions.getAllAtCreateJob())
      this.store.dispatch(FieldActions.getAllNoLimitAtCreateJob())
      this.store.dispatch(ServicePackageActions.getAllAtCreatJob())


      this.subscriptions.push(
        this.careerTakenByGetAllAtCreateJob$.subscribe((careers) => {
          if(careers.length > 0){
            this.careers = careers;
            this.nameOfCareers = careers.map(career => career.Name);            
          }
        }),
        this.fieldNoLimitAtCreateJob$.subscribe((fields) => {
          if(fields.length > 0){
            this.fields = fields;
            this.nameOffields = fields.map(field => field.FieldName);
          }
        }),
        this.servicePackageTakenByGetAllAtCreateJob$.subscribe((servicePackages) => {
          if(servicePackages.length > 0){
            this.servicePackages = servicePackages;
            this.nameOfServicePackages = servicePackages.map(servicePackage => servicePackage.Name);
          }
        }),
        this.careerTakenByFieldAtCreateJob$.subscribe((careers) => {
          if(careers.length > 0){
            this.careers = careers;
            this.nameOfCareers = careers.map(career => career.Name);            
          }
        }),
        this.isCreateJobAtJob$.subscribe((isSuccess) => {
          if(isSuccess){
            alert("Tạo công việc thành công");
            //this.router.navigate(['recruiter/job-management']);
          }
        })
      );



     }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  fieldValue: any
  onFieldChange() {
    if(this.fieldValue){
      const selectedField = this.fields.find(field => field.FieldName == this.fieldValue);
      if(selectedField){
      this.store.dispatch(CareerActions.getByFieldAtCreateJob({field: selectedField._id??""}))
      }

    }
    
  }





  createJob(){
    if(this.jobPostForm.value.Negotiate){
      this.jobPostForm.controls.Salary.setValue("Thỏa thuận");
    }
    else{
      this.jobPostForm.controls.Salary.setValue(this.jobPostForm.value.SalaryStart + " - " + this.jobPostForm.value.SalaryEnd);
    }
    const jobToCreate: any={
      Name: this.jobPostForm.value.Name??"",
      JobId: generateUuid(),
      Description: this.jobPostForm.value.Description??"",
      Recruitment: [],
      Recruiter: "65fa893d3dcc1153af38b1a5",
      Company:"65fa88763dcc1153af38b190",
      Location: "Hồ Chí Minh",
      Salary: this.jobPostForm.value.Salary??"",
      Welfare: this.Welfare.value??[],
      Career: this.careers.find(career => career.Name == this.jobPostForm.value.Career)?._id??"",
      Field: this.fields.find(field => field.FieldName == this.jobPostForm.value.Field)?._id??"",
      StartDate: this.jobPostForm.value.DateStart??new Date(),
      EndDate: this.jobPostForm.value.DateEnd??new Date(),
      Requirement: this.jobPostForm.value.Requirement??"",
      ServicePackage: this.servicePackages.find(servicePackage => servicePackage.Name == this.jobPostForm.value.ServicePakage)?._id??"",
      Tags: this.tagsList??[],
      StatusPayment: false,
      Priority: this.servicePackages.find(servicePackage => servicePackage.Name == this.jobPostForm.value.ServicePakage)?.Priority??0,
      Hot: this.servicePackages.find(servicePackage => servicePackage.Name == this.jobPostForm.value.ServicePakage)?.Hot??false,
      ColorTitle: this.servicePackages.find(servicePackage => servicePackage.Name == this.jobPostForm.value.ServicePakage)?.ColorTitle??false,
      Urgent: this.servicePackages.find(servicePackage => servicePackage.Name == this.jobPostForm.value.ServicePakage)?.Urgent??false,



    }
    this.store.dispatch(JobActions.createJobAtJob({job: jobToCreate}));
  }
  



  tagsList : string[] = [];
  addTag(){
    const newTag = this.jobPostForm.value.Tag;
    if(newTag){
      this.tagsList.push(newTag);
      this.jobPostForm.controls.Tag.setValue('');
    }
    console.log(this.tagsList);
  }
  removeTag(index: number){
    this.tagsList.splice(index, 1);
    console.log(this.tagsList);
  }





  //Phúc lợi
  search: string | null = '';
  readonly Welfare = new FormControl([ITEMS[0]]);
  @tuiPure
  filter(search: string | null): readonly string[] {
      return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
  //

  

  test: any={};
  add(){
    this.test={
      a:this.Welfare.value,
      b:this.jobPostForm.value.Negotiate,
    }
    console.log(this.test);
  }

}

