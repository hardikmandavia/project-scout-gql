import { Test, TestingModule } from '@nestjs/testing';
import { SummonerResolver } from './summoner.resolver';
import { SummonerService } from './summoner.service';

describe('SummonerResolver', () => {
  let resolver: SummonerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummonerResolver, SummonerService],
    }).compile();

    resolver = module.get<SummonerResolver>(SummonerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
