import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { User } from './shared/user';
import { UserService } from './shared/user.service';


@Controller('users')
export class UserController {

    constructor(
        private Userervice: UserService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<User[]> {
        return this.Userervice.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<User> {
        return this.Userervice.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() userJSONValues: User): Promise<User> {
        return this.Userervice.create(userJSONValues);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() userWithUpdatedValues: User): Promise<User> {
        userWithUpdatedValues.id = id;
        try {
            return await this.Userervice.update(id, userWithUpdatedValues);
        } catch (error) {
            console.log(error);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.Userervice.delete(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteMany() {
        this.Userervice.deleteMany();
    }
}