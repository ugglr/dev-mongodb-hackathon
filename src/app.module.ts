import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AppEventsModule } from './app-events/app-events.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.gql',
      sortSchema: true,
      playground: true,
      introspection: true,
    }),
    AppEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
