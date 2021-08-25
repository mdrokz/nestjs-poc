

import { Body, Controller, Get, HttpCode, Post, UseFilters, UseGuards } from '@nestjs/common';
import { CIDExceptionFilter } from 'src/utils/filters/cid-exception.filter';
import { JwtAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { IUser, UserDto } from './models/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Post('createUser')
    @HttpCode(200)
    @UseFilters(CIDExceptionFilter)
    async createUser(@Body() userDto: UserDto): Promise<IUser> {
        return await this.userService.createUser(userDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async getUsers(): Promise<IUser[]> {
        return await this.userService.findAll();
    }
}
