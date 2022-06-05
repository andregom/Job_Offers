import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './shared/user';
import { UserService } from './shared/user.service';


@Controller('users')
export class UserController {

    constructor(
        private Userervice: UserService,
    ) { }

    @Get()
    async getAll(): Promise<User[]> {
        return this.Userervice.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<User> {
        return this.Userervice.getById(id);
    }

    @Post()
    async create(@Body() userJSONValues: User): Promise<User> {
        return this.Userervice.create(userJSONValues);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userWithUpdatedValues: User): Promise<User> {
        userWithUpdatedValues.id = id;
        try {
            return await this.Userervice.update(id, userWithUpdatedValues);
        } catch (error) {
            console.log(error);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.Userervice.delete(id);
    }

    @Delete()
    async deleteMany() {
        this.Userervice.deleteMany();
    }
}