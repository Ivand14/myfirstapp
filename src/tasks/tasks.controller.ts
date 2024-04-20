import { Controller, Get } from "@nestjs/common";
import { TasksServices } from "./tasks.service";

@Controller({})

export class taskController {

    tasksServices: TasksServices

    constructor(tasksServices: TasksServices) {
        this.tasksServices = tasksServices
    }

    @Get('/task')
    getAllTasks() {
        return this.tasksServices.getTask()
    }

}