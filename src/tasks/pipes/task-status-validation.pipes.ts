/* eslint-disable prettier/prettier */
import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
    TaskStatus.OPEN
  ]
  transform(value: any) {
    console.log(value);
    value = value.toUpperCase();
    if(!this.isStatusValid(value)){
      throw new BadRequestException(`${value} is an invalid Task Status!`)
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
