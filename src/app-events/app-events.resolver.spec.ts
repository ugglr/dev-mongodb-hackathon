import { Test, TestingModule } from '@nestjs/testing';
import { AppEventsResolver } from './app-events.resolver';

describe('AppEventsResolver', () => {
  let resolver: AppEventsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppEventsResolver],
    }).compile();

    resolver = module.get<AppEventsResolver>(AppEventsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
