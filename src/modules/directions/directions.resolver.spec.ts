import { Test, TestingModule } from '@nestjs/testing';
import { DirectionsResolver } from './directions.resolver';
import { DirectionsService } from './directions.service';

describe('DirectionsResolver', () => {
  let resolver: DirectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectionsResolver, DirectionsService],
    }).compile();

    resolver = module.get<DirectionsResolver>(DirectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
