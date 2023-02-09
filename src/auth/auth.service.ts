import { Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthUserDto } from './auth-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) { }

    async validateUser(authUserDto: AuthUserDto): Promise<any> {
        Logger.log('je suis la')
        const user = await this.userService.auth(authUserDto.mail);
        if (!user) return null

        const passwordValid = await bcrypt.compare(authUserDto.password, user.password)
        if (!user) {
            throw new NotAcceptableException('could not find the user')

        }
        if (user && passwordValid) {
            return user
        }
        return null
    }

    async login(user: any) {

        const payload = { mail: user.mail, sub: user.passport };

        const token = await this.jwtService.sign(payload);
        Logger.log(payload)
        return {
            access_token: token
        }
    }
}
