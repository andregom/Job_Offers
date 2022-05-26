import { Test, TestingModule } from '@nestjs/testing';
import { JobRolesController } from './job_roles.controller';

describe('JobRolesController', () => {
  let controller: JobRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobRolesController],
    }).compile();

    controller = module.get<JobRolesController>(JobRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
