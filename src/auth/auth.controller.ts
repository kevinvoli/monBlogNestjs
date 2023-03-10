import { Controller, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.body)
    }
}
