import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobRolesModule } from './job_roles/job_roles.module';

@Module({
  imports: [JobRolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
