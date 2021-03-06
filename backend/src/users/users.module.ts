import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './shared/user.service';
import { UserController } from './users.controller';

@Module({
    imports: [
        MongooseModule.forFeature([ { name: 'User', schema: UserSchema }])
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {}
