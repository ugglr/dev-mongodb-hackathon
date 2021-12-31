import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AppEventsService } from './app-events.service';
import { AppEventDto } from './dto/app-event.dto';
import { CreateAppEventInput } from './inputs/create-app-event.input';

@Resolver()
export class AppEventsResolver {
  constructor(private appEventService: AppEventsService) {}

  @Mutation(() => AppEventDto, { description: 'Creates a new app event' })
  async createAppEvent(
    @Args('input') createAppEventInput: CreateAppEventInput,
  ): Promise<AppEventDto> {
    return this.appEventService.create(createAppEventInput);
  }
}
