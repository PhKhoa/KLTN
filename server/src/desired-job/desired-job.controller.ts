import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesiredJobService } from './desired-job.service';
import { CreateDesiredJobDto } from './dto/create-desired-job.dto';
import { UpdateDesiredJobDto } from './dto/update-desired-job.dto';

@Controller('desired-job')
export class DesiredJobController {
  constructor(private readonly desiredJobService: DesiredJobService) {}

  @Post('create')
  async create(@Body() createDesiredJobDto: CreateDesiredJobDto) {
    try{
      const newDesiredJob = await this.desiredJobService.create(createDesiredJobDto)
      return newDesiredJob;
    }
    catch(err){
      throw err;
    }
  }

  @Get('getAll')
  async findAll() {
    try{
      const desiredJobs = await this.desiredJobService.findAll();
      return desiredJobs;
    }
    catch(err){
      throw err;
    }
  }

}
