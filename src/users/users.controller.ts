import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {

    constructor(private usersServices: UsersService) { }

    @Get('/allUsers')
    getUsers() { 
        return this.usersServices.getUsers()
    }

}
