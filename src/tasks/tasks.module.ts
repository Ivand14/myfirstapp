import { Module } from '@nestjs/common';
import { taskController } from './tasks.controller';
import { TasksServices } from './tasks.service';

@Module({
    controllers: [taskController],
    providers: [TasksServices]
})
export class TasksModule { }
