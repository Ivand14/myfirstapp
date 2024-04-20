import { Injectable } from "@nestjs/common";

@Injectable({})
export class TasksServices {
    getTask() {
        return ['task 1', 'task 2', 'task 3']
    }
}