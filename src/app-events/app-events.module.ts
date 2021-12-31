import { Module } from '@nestjs/common';
import { AppEventsService } from './app-events.service';
import { AppEventsResolver } from './app-events.resolver';
import { appEventsProviders } from './app-event.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AppEventsService, AppEventsResolver, ...appEventsProviders],
})
export class AppEventsModule {}
