import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'Ivan',
            age: 24
        },
        {
            id: 1,
            name: 'Trinidad',
            age: 23
        }
    ]

    getUsers() { 
        return this.users
    }

}
