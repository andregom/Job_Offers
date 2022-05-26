import { Test, TestingModule } from '@nestjs/testing';
import { JobRolessService } from './job_roless.service';

describe('JobRolessService', () => {
  let provider: JobRolessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRolessService],
    }).compile();

    provider = module.get<JobRolessService>(JobRolessService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
