import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';


@Controller()
export class HelloController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        response.status(200).json({
            message: 'Hello World'
        })
    }

    @Post('/createGreeting')
    createGreeting(@Body() greeting: any) {
        console.log(greeting)
    }

}
