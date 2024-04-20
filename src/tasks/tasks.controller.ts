import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksServices } from "./tasks.service";

@Controller('/tasks')

export class taskController {

    tasksServices: TasksServices

    constructor(tasksServices: TasksServices) {
        this.tasksServices = tasksServices
    }

    @Get()
    getAllTasks() {
        return this.tasksServices.getTask()
    }

    @Post()
    postTasks() {
        return this.tasksServices.postTask()
    }

    @Put()
    putTasks() {
        return this.tasksServices.putTask()
    }

    @Patch()
    patchTasks() {
        return this.tasksServices.patchTask()
    }

    @Delete()
    deleteTasks() {
        return this.tasksServices.deleteTask()
    }

}