import { Module } from '@nestjs/common';
import { JobRolesController } from './job_roles.controller';
import { JobRolessService } from './shared/job_roless.service';

@Module({
  controllers: [JobRolesController],
  providers: [JobRolessService]
})
export class JobRolesModule {}
