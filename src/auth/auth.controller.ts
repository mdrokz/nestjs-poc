import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/utils/guards/local-auth.guard';
import { IUser, UserDto } from '../user/models/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() user: UserDto) {
        return this.authService.login({ _id: user._id, password: user.password, username: user.firstName });
    }

}
