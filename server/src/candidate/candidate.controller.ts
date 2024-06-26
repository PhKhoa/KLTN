import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { EducationService } from 'src/education/education.service';
import { CreateEducationDto } from 'src/education/dto/create-education.dto';
import { CreateWorkExperienceDto } from 'src/work-experience/dto/create-work-experience.dto';
import { WorkExperienceService } from 'src/work-experience/work-experience.service';
import { log } from 'console';
import { DesiredJobService } from 'src/desired-job/desired-job.service';
import { CreateDesiredJobDto } from 'src/desired-job/dto/create-desired-job.dto';
import { storage } from 'firebase-admin';
import { CreateStorageDto } from 'src/storage/dto/create-storage.dto';
import { SkillService } from 'src/skill/skill.service';
import { CreateSkillDto } from 'src/skill/dto/create-skill.dto';
import { ReferencesService } from 'src/references/references.service';
import { CreateReferenceDto } from 'src/references/dto/create-reference.dto';

@Controller('candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly educationService: EducationService,
    private readonly workExperienceService: WorkExperienceService,
    private readonly skillService: SkillService,
    private readonly desiredJobService: DesiredJobService,
    private readonly referenceService: ReferencesService
    ) {}

  @Post('create')
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    try{
      const newCandidate = await this.candidateService.create(createCandidateDto)
      return newCandidate;
    }
    catch(error){
      throw error;
    }
  }

  @Get('getAll')
  async findAll() {
    return this.candidateService.findAll();
  }

  @Get('getByUser')
  async findByUser(@Query('user') user:string){
    try{
      const candidate = await this.candidateService.findByUser(user);
      return candidate;
    }
    catch(error){
      throw error;
    }
  }

  @Get('getById')
  async findById(@Query('id') id: string){
    try{
      const candidate = await this.candidateService.findById(id);
      return candidate;
    }
    catch(error){
      throw error;
    }
  }

  @Put('updateEducation')
  async updateEducation(@Body() createEducationDto: CreateEducationDto, @Query('id') id: string){
    try{
      const newEducation = await this.educationService.create(createEducationDto);
      if(newEducation._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      const candidate = await this.candidateService.updateEducation(id, newEducation._id.toString());
      if(candidate._id.toString() !="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateReference')
  async updateReference(@Query('id') id: string, @Body() createReferenceDto: CreateReferenceDto){
    try{
      const reference = await this.referenceService.create(createReferenceDto);
      log(reference)
      if(reference._id!="500"){
        const candidate = await this.candidateService.updateReference(id, reference._id.toString());
        if(candidate._id.toString()!="500"){
          return candidate;
        }
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }

  }

  @Put('updateWorkExperience')
  async updateWorkExperience(@Query('id') id: string, @Body()createWorkExperienceDto: CreateWorkExperienceDto){
    try{
      const workExperience = await this.workExperienceService.create(createWorkExperienceDto);
      if(workExperience._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      const candidate = await this.candidateService.updateWorkExperience(id, workExperience._id.toString());
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateSkills')
  async updateSkills(@Query('id') id: string, @Body()createSkillDto:CreateSkillDto){
    try{
      const skill = await this.skillService.create(createSkillDto);
      if(skill._id!="500"){
        const candidate = await this.candidateService.updateSkill(id, skill._id.toString());
        if(candidate._id.toString()!="500"){
        return candidate;
      }
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }


  @Put('updateAvatar')
  async updateAvatar(@Query('id') id: string, @Body() storage: any){
    try{
      const candidate = await this.candidateService.updateAvatar(id, storage);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateFavoriteJobs')
  async updateFavoriteJobs(@Query('id') id: string, @Query('job_id') job_id: string){
    try{
      const candidate = await this.candidateService.updateFavoriteJobs(id, job_id);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateBasicInfo')
  async updateBasicInfo(@Query('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto){
    try{
      const candidate = await this.candidateService.updateBasicInfo(id,updateCandidateDto );
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateLanguage')
  async updateLanguage(@Query('id') id: string, @Query('language') language: string){
    try{
      const candidate = await this.candidateService.updateLanguage(id, language);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateCareerGoal')
  async updateCareerGoal(@Query('id') id: string, @Query('career_goal') career_goal: string){
    try{
      const candidate = await this.candidateService.updateCareerGoal(id, career_goal);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateDesiredJob')
  async updateDesiredJob(@Query('id') id: string, @Body() createDesiredJobDto: CreateDesiredJobDto){
    try{
      const desiredJob = await this.desiredJobService.create(createDesiredJobDto);
      if(desiredJob._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      const candidate = await this.candidateService.updateDesiredJob(id, desiredJob._id.toString());
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }

    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateOneOfEducation')
  async updateOneOfEducation(@Query('id') id: string, @Body() education: any){
    try{
      const educationAfterUpdate = await this.educationService.update(education);
      if(educationAfterUpdate._id!="500"){
        const candidate = await this.candidateService.findById(id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateOneOfWorkExperience')
  async updateOneOfWorkExperience(@Query('id') id: string, @Body() workExperience: any){
    try{
      log(workExperience)
      const workExperienceAfterUpdate = await this.workExperienceService.update(workExperience);
      console.log(workExperienceAfterUpdate);
      
      if(workExperienceAfterUpdate._id!="500"){
        const candidate = await this.candidateService.findById(id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }
  @Put('UpdateOneOfSkill')
  async updateOneOfSkill(@Query('id') id: string, @Body() skill: any){
    try{
      const skillAfterUpdate = await this.skillService.update(skill);
      if(skillAfterUpdate._id!="500"){
        const candidate = await this.candidateService.findById(id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateOneOfReference')
  async updateOneOfReference(@Query('id') id: string, @Body() reference: CreateReferenceDto){
    try{
      const referenceAfterUpdate = await this.referenceService.update(reference);
      if(referenceAfterUpdate._id!="500"){
        const candidate = await this.candidateService.findById(id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('DeleteFavoriteJobs')
  async deleteFavoriteJobs(@Query('id') id: string, @Query('job_id') job_id: string){
    try{
      const candidate = await this.candidateService.deleteFavoriteJobs(id, job_id);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }


  @Put('DeleteSkills')
  async deleteSkills(@Query('id') id: string, @Query('skill') skill: string){
    try{
      const result = this.skillService.delete(skill);
      if(result){
        const candidate = await this.candidateService.deleteSkills(id, skill);
        log(candidate)
        if(candidate._id.toString()!="500"){
          return candidate;
        }
      }
      else{
        return {
        _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('DeleteWorkExperience')
  async deleteWorkExperience(@Query('id') id: string, @Query('work_experience_id') work_experience_id: string){
    try{
      const result = this.workExperienceService.delete(work_experience_id);
      if(result){
        const candidate = await this.candidateService.deleteWorkExperience(id, work_experience_id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

 
  @Put('DeleteEducation')
  async deleteEducation(@Query('id') id: string, @Query('education_id') education_id: string){
    try{
      const result = this.educationService.delete(education_id);
      if(result){
        const candidate = await this.candidateService.deleteEducation(id, education_id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
      else{
        return {
          _id: "500",
        }
      }

    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }
  @Put('DeleteReference')
  async deleteReference(@Query('id') id: string, @Query('reference_id') reference_id: string){
    try{
      const result = this.referenceService.delete(reference_id);
      if(result){
        const candidate = await this.candidateService.deleteReference(id, reference_id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }
  @Put('deleteLanguage')
  async deleteLanguage(@Query('id') id: string, @Query('language') language: string){
    try{
      const candidate = await this.candidateService.deleteLanguage(id, language);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }


  


}
