import { Test, TestingModule } from '@nestjs/testing';
import { MessengersResolver } from './messengers.resolver';
import { MessengersService } from './messengers.service';

describe('MessengersResolver', () => {
  let resolver: MessengersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessengersResolver, MessengersService],
    }).compile();

    resolver = module.get<MessengersResolver>(MessengersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
