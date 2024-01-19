import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Train } from './train.entity';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) {}

  async getTrainSchedule(): Promise<Train[]> {
    return this.trainRepository.find();
  }

  async createTrain(createTrainDto: CreateTrainDto): Promise<Train> {
    const newTrain = this.trainRepository.create(createTrainDto);

    return this.trainRepository.save(newTrain);
  }

  async deleteTrain(id: number): Promise<void> {
    const result = await this.trainRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }
  }

  async updateTrain(id: number, updateTrainDto: UpdateTrainDto): Promise<Train> {
    const train = await this.trainRepository.findOne({ where: { id } });

    if (!train) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }

    Object.assign(train, updateTrainDto);

    return this.trainRepository.save(train);
  }

  async partialUpdateTrain(id: number, updateTrainDto: UpdateTrainDto): Promise<Train> {
    const train = await this.trainRepository.findOne({ where: { id } });

    if (!train) {
      throw new NotFoundException(`Train with ID ${id} not found`);
    }

    Object.keys(updateTrainDto).forEach(key => {
      if (updateTrainDto[key] !== undefined) {
        train[key] = updateTrainDto[key];
      }
    });

    return this.trainRepository.save(train);
  }
}
