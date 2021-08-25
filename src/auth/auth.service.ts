import { Injectable } from '@nestjs/common';
import { IUser } from '../user/models/user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {

    }
    async validateUser(username: string, pass: string) {
        console.log(username, pass);
        const user = await this.userService.findOne(username) as IUser;
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: { username: string, _id: string, password: string }) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
