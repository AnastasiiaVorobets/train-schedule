import { Controller, Get, Post, Delete, Put, Patch, Param, Body } from '@nestjs/common';
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Controller('trains')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Get()
  getTrainSchedule() {
    return this.trainService.getTrainSchedule();
  }

  @Post()
  createTrain(@Body() createTrainDto: CreateTrainDto) {
    return this.trainService.createTrain(createTrainDto);
  }

  @Delete(':id')
  deleteTrain(@Param('id') id: number) {
    return this.trainService.deleteTrain(id);
  }

  @Put(':id')
  updateTrain(@Param('id') id: number, @Body() updateTrainDto: UpdateTrainDto) {
    return this.trainService.updateTrain(id, updateTrainDto);
  }

  @Patch(':id')
  partialUpdateTrain(@Param('id') id: number, @Body() updateTrainDto: UpdateTrainDto) {
    return this.trainService.partialUpdateTrain(id, updateTrainDto);
  }
}
