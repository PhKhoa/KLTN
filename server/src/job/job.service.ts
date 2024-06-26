import { HttpException, Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './entities/job.entity';
import { Model } from 'mongoose';
import { log } from 'console';
import { Recruiter } from 'src/recruiter/entities/recruiter.entity';
import { Field } from 'src/field/entities/field.entity';
import { Career } from 'src/career/entities/career.entity';
import { ServicePackage } from 'src/service-package/entities/service-package.entity';
import { Company } from 'src/company/entities/company.entity';
import { Recruitment } from 'src/recruitment/entities/recruitment.entity';

@Injectable()
export class JobService {

constructor(
  @InjectModel(Job.name) private JobModel: Model<Job>,
  @InjectModel(Recruiter.name) private recruiterModel: Model<Recruiter>,
  @InjectModel(Field.name) private fieldModel: Model<Field>,
  @InjectModel(Career.name) private careerModel: Model<Career>,
  @InjectModel(ServicePackage.name) private servicePackageModel: Model<ServicePackage>,
  @InjectModel(Company.name) private companyModel: Model<Company>,
  @InjectModel(Recruitment.name) private recruitertmentModel: Model<Recruitment>

)
{}
  async create(createJobDto: CreateJobDto) {
    try{
      const newJob = new this.JobModel(createJobDto);
      return newJob.save(); 
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getAll(){
    try{
      const jobs = await this.JobModel.find()
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .exec();;
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getAllAndSort(page: number, limit: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
  })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name ', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name Priority Hot ColorTitle Urgent', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getAllAndSortWithUrgent(page: number, limit: number,urgent: boolean){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Urgent: urgent,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name ', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name Priority Hot ColorTitle Urgent', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByCareer(page: number, limit: number, careerId: string){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Career: careerId,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
          ],
          StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name ', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getByCareerWithUrgent(page: number, limit: number, careerId: string,urgent: boolean){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Career: careerId,
        Urgent:urgent,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name ', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByField(page: number, limit: number, fieldId: string){
    try{
      log(fieldId)
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Field: fieldId,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
    })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getByFieldWithUrgent(page: number, limit: number, fieldId: string,urgent: boolean){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Field: fieldId,Urgent: urgent,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
  })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  
  async getByPriority(page: number, limit: number ,priority: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({Priority: priority})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByHotJob(page: number, limit: number ){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Hot: true,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }
  async getBy_id(id: string){
    try{
      const job = await this.JobModel.findById(id)
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name Price', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .exec();
      return job
    }
    catch(error){
      return{
        _id: "500",
        error: error
      }
    }
  }
  async getById(id: string){
    try{
      const job = await this.JobModel.findOne({JobId: id})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .exec();
      return job
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }

  }



  async updateStatusPayment(id: String, status: boolean) {
    try{

        const updateJob = await this.JobModel.findByIdAndUpdate(
          id,
          { 
            StatusPayment: status,
          },
          {new:true}
          );
          if(updateJob._id){
            return updateJob;
          }else{
            return {
              _id: "500",
            }
          }

    }
    catch(error){
      return{
        _id: "500",
        error: error
        
      }
    }
  }
  async updateStatusRecruitment(id: String, status: boolean) {
    try{
        const updateJob = await this.JobModel.findByIdAndUpdate(
          id,
          { 
            StatusRecruitment: true
          },
          {new:true}
          );
          return updateJob;
    }
    catch(error){
      throw new HttpException(error.message, error.status);
    }
  }

  async getByCompany(companyId: String,page: number, limit: number ){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        Company: companyId,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true 
        
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      []
    }
  }

  async getByNameWithKeyword(keyword: string, page: number, limit: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "Name": {"$regex": keyword, "$options": "i",
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
        }})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }

  async getByKeyword(keyword: string, page: number, limit: number ){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({ 
        $or: [
          {"Name": {"$regex": keyword, "$options": "i"}},
          {"Tags": {"$regex": keyword, "$options": "i"}},
          {"Location": {"$regex": keyword, "$options": "i"}}],
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
        })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }
  async getByKeywordWithUrgent(keyword: string, page: number, limit: number ,urgent: boolean){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({ 
        $or: [
          {"Name": {"$regex": keyword, "$options": "i"}},
          {"Tags": {"$regex": keyword, "$options": "i"}},
          {"Location": {"$regex": keyword, "$options": "i"}}
        ], 
        Urgent: urgent,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }


  async getByTagsWithKeyword(keyword: string, page: number, limit: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "Tags": {"$regex": keyword,"$options": "i"},
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }
  async getByTagsWithKeywordUrgent(keyword: string, page: number, limit: number, urgent: boolean){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "Tags": {"$regex": keyword, "$options": "i"},
        Urgent: urgent,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
        
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }

  async getByLocationWithKeyWord(keyword: string, page: number, limit: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "Address": {"$regex": keyword, "$options": "i"},
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true 
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }
  async getByLocationWithKeyWordAndUrgent(keyword: string, page: number, limit: number, urgent: boolean){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "Location": {"$regex": keyword, "$options": "i"},
        Urgent: urgent,
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return [];
    }
  }
    async getByRecruiter(recruiter: string,page: number, limit: number ){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({Recruiter: recruiter})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return[]
    }
  }
  async geAllAndSortByWelFareAndSalare(page: number, limit: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({
        "$and": [
          {"StartDate": {"$lte": new Date()}},
          {"EndDate": {"$gte": new Date()}},
        ],
        StatusPayment: true
      })
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name Priority Hot ColorTitle Urgent', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"Welfare": -1, "EndSalary": -1, "Priority": -1, "createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
    }
    catch(error){
      return []
    }
  }
  async getByStatusPayment(status: boolean, page: number, limit: number){
    try{
      const skip = page * limit;
      const jobs = await this.JobModel.find({StatusPayment: status})
      .populate('Career','CareerId Name', this.careerModel)
      .populate('Recruiter','RecruiterId Name', this.recruiterModel)
      .populate('Company','CompanyId Name Avatar Address', this.companyModel)
      .populate('Field','FieldId FieldName', this.fieldModel)
      .populate('ServicePackage','ServicePackageId Name Priority Hot ColorTitle Urgent Price', this.servicePackageModel)
      .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
      .sort({"createdAt": -1})
      .skip(skip)
      .limit(limit)
      .exec();
      return jobs
  }catch{
    return []
  }
}

  
  async updateJob(jobId: string, updateJobDto: UpdateJobDto) {
    try{
      log(jobId)
      const updateJob = await this.JobModel.findByIdAndUpdate(
        jobId,
        {
          Name: updateJobDto.Name,
          Company: updateJobDto.Company,
          Career: updateJobDto.Career,
          Field: updateJobDto.Field,
          ServicePackage: updateJobDto.ServicePackage,
          Location: updateJobDto.Location,
          Salary: updateJobDto.Salary,
          Tags: updateJobDto.Tags,
          Description: updateJobDto.Description,
        },
        {new:true}
        )
        .populate('Career','CareerId Name', this.careerModel)
        .populate('Recruiter','RecruiterId Name Company', this.recruiterModel)
        .populate('Company','CompanyId Name Avatar Address', this.companyModel)
        .populate('Field','FieldId FieldName', this.fieldModel)
        .populate('ServicePackage','ServicePackageId Name', this.servicePackageModel)
        .populate('Recruitment','RecruitmentId Candidate Job Recruiter Company Career Field ', this.recruitertmentModel)
        .exec();
        
        if(updateJob._id.toString().length > 0){
          return updateJob;
        }
        else{
          return{
            _id: "500",
          }
        }
    }
    catch(error){
      return{
        _id: "500",
      }
    }
  }



  async deleteJob(jobId:string){
    try{
      const deleteJob = await this.JobModel.findByIdAndDelete(jobId).exec();
      if(deleteJob._id.toString().length > 0){
      return true;
    }
    else{
      false
    }
    }
    catch(error){
      return false;
    }
  }

  async updateRecruiment(recruiterationId:string, jobId: string){
    try{
      const updatedJob = await this.JobModel.findByIdAndUpdate(
        jobId,
        {
          $push: { Recruitment: recruiterationId }
        },
        {new:true})
      .exec();
      if(updatedJob._id.toString().length > 0){
        return updatedJob;
      }else{
        return {
          _id: "",
        }
      }
      
    }
    catch(error){
      return {
        _id: "",
      }
    }
  }

  async deleteRecruitment(recruitment: string, id:string){
    try{
      const job = await this.JobModel.findByIdAndUpdate(
        id,
        {
          $pull: { Recruitment: recruitment }
        },
        {new:true}
      ).exec();
      return job;
    }
    catch(error){
      return {
        _id: "",
      }
    }
  }





}
