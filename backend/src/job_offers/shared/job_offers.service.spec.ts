import { Test, TestingModule } from '@nestjs/testing';
import { JobOffersService } from './job_offers.service';

describe('JobOffersService', () => {
  let provider: JobOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobOffersService],
    }).compile();

    provider = module.get<JobOffersService>(JobOffersService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
