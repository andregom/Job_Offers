import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './shared/auth.service';

import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './shared/local.startegy';
@Module({
    imports: [
        UsersModule
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        LocalStrategy
    ],
})
export class AuthModule { }
