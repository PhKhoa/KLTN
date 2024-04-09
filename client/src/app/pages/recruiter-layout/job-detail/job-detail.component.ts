import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {TUI_DEFAULT_MATCHER, TuiDay, TuiTime, tuiPure} from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Job } from '../../../models/job.model';
import { extractNumbersRegex } from '../../../../environments/environments';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';

const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [ShareModule,TaigaModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.less'
})
export class JobDetailComponent {
  @ViewChild('jobDialog', { static: true })
  jobDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  //variable
  listJobs: Job[] = [];
  subscriptions: Subscription[] = [];
  careerList: Career[]=[];
  fieldList: Field[] = [];

  //ngrx of job
  jobGetByRecruiterATJobDetail$ = this.store.select('job','jobsTakenByRecruiterAtJobDetail')

  //ngrx of field
  fieldNoLimitAtJobDetail$ = this.store.select('field', 'fieldNoLimitAtJobDetail');


  //ngrx of career
  careersTakenByGetAllAtJobDetail$ = this.store.select('career', 'careersTakenByGetAllAtJobDetail');
  careersTakenByGetByFieldAtJobDetail$ = this.store.select('career', 'careersTakenByGetByFieldAtJobDetail');



  constructor(
    private store: Store<{job: jobState, field: FieldState, career: CareerState}>,

  ){
    //get job theo recruiter
    this.store.dispatch(JobActions.getJobByRecruiterAtJobDetail({recruiter: '65fa893d3dcc1153af38b1a5'}) );

    //getAll field
    this.store.dispatch(FieldActions.getAllNoLimitAtJobDetail());

    //getAll carrer
    this.store.dispatch(CareerActions.getAllAtJobDetail());


    //theo dõi ngrx
    this.subscriptions.push(

      //theo dõi job lấy bởi recruiter
      this.jobGetByRecruiterATJobDetail$.subscribe(jobs => {
        if(jobs.length > 0){
          console.log(jobs);
          this.listJobs = jobs;
        }
      }),
      //theo dõi field dc getAll
      this.fieldNoLimitAtJobDetail$.subscribe(fields => {
        console.log(fields);
        if(fields.length > 0){
          this.fieldList = fields;
        }
      }),
      //theo dõi career dc getAll
      this.careersTakenByGetAllAtJobDetail$.subscribe(careers => {
        console.log(careers);
        if(careers.length > 0){
          this.careerList = careers;
        }
      }),
      //theo dõi career dc lấy bởi field
      this.careersTakenByGetByFieldAtJobDetail$.subscribe(careers => {
        console.log(careers);
        if(careers.length > 0){
          this.careerList = careers;
        }
      })
    )
  }

  onFieldChange(event: any) {
    const field_id = this.jobForm.value.Field;
    console.log(field_id);
    this.store.dispatch(CareerActions.getByFieldAtJobDetail({field: field_id??""}));
    
  }

  updateJob(){
    let jobData = {
      Name: this.jobForm.value.Name,
      Description: this.jobForm.value.Description,
      Location: this.jobForm.value.Location,
      Address: this.addressList,
      Salary: this.jobForm.value.Salary,
      Requirement: this.jobForm.value.Requirement,
      Career: this.jobForm.value.Career,
      Field: this.jobForm.value.Field,
      Welfare: this.Welfare,
      Tags: this.tagsList,
      StartDate: this.jobForm.value.DateStart,
      EndDate: this.jobForm.value.DateEnd,


    }
    console.log(jobData);
    

  }
  openJobDialog(job: Job) {
    console.log(job);
    let [startSalary, endSalary] =[0,0]
    if(job.Salary != "Thỏa thuận"){
      [startSalary, endSalary] = extractNumbersRegex(job.Salary);
    }
    else{

    }
    this.jobDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
    this.jobForm.controls.Name.setValue(job.Name);
    this.jobForm.controls.Description.setValue(job.Description);
    this.jobForm.controls.Location.setValue(job.Location);
    this.jobForm.controls.Address.setValue(job.Address);
    this.jobForm.controls.Salary.setValue(job.Salary);
    this.jobForm.controls.SalaryStart.setValue(startSalary.toString());
    this.jobForm.controls.SalaryEnd.setValue(endSalary.toString());
    this.jobForm.controls.Requirement.setValue(job.Requirement);
    this.jobForm.controls.Career.setValue(job.Career._id);
    this.jobForm.controls.Field.setValue(job.Field._id);
    this.Welfare.setValue(job.Welfare);
    job.Tags.forEach(element => {
      this.tagsList.push(element);
    });
    // this.tagsList = job.Tags;
  }
  closeJobDialog() {
    this.jobDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  // Lấy timestamp hiện tại
  timestamp = Date.now();

  // Khởi tạo Date object từ timestamp
  date = new Date(this.timestamp);

  // Lấy ngày, tháng, năm từ Date object
  day = this.date.getDate();
  month = this.date.getMonth(); 
  year = this.date.getFullYear();

  jobForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Location: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),

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

  



  tagsList : string[] = [];
  addTag(){
    const newTag = this.jobForm.value.Tag;
    if(newTag){
      this.tagsList.push(newTag);
      this.jobForm.controls.Tag.setValue('');
    }
    console.log(this.tagsList);
  }
  removeTag(index: number){
    this.tagsList.splice(index, 1);
    console.log(this.tagsList);
  }

  addressList:string[]=[];
  addAddress(){
    const newLocation = this.jobForm.value.Address;
    if(newLocation){
      this.addressList.push(newLocation);
      this.jobForm.controls.Address.setValue('');
    }
    console.log(this.addressList);
  }
  removeAddress(index: number){
    this.addressList.splice(index, 1);
    console.log(this.addressList);
  }

  //Phúc lợi
  search: string | null = '';
  readonly Welfare = new FormControl([ITEMS[0]]);
  @tuiPure
  filter(search: string | null): readonly string[] {
      return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
  //
}
