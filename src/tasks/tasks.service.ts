import { Injectable } from "@nestjs/common";

@Injectable({})
export class TasksServices {
    getTask() {
        return ['task 1', 'task 2', 'task 3']
    }

    postTask() {
        return 'Creando Tarea'
    }

    patchTask() {
        return 'actualizando estado de una tarea'
    }

    putTask() {
        return 'actualizando tarea'
    }

    deleteTask() {
        return 'eliminando tarea'
    }
}