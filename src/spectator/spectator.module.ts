import { Module } from '@nestjs/common';
import { SpectatorService } from './spectator.service';
import { SpectatorResolver } from './spectator.resolver';

@Module({
  providers: [SpectatorResolver, SpectatorService],
})
export class SpectatorModule {}
