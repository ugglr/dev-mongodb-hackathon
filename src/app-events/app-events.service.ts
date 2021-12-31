import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { APP_EVENT_CONSTANTS } from 'src/constants';
import { AppEventDto } from './dto/app-event.dto';
import { CreateAppEventInput } from './inputs/create-app-event.input';
import { AppEventInterface } from './interfaces/app-event.interface';

@Injectable()
export class AppEventsService {
  constructor(
    @Inject(APP_EVENT_CONSTANTS.model)
    private appEventModel: Model<AppEventInterface>,
  ) {}

  async create(createAppEventInput: CreateAppEventInput): Promise<AppEventDto> {
    const createdEvent = new this.appEventModel(createAppEventInput);

    try {
      const dbRes = await createdEvent.save();

      return {
        id: dbRes.id,
        event: dbRes.event,
        date: dbRes.date,
      };
    } catch (dbSaveError) {
      throw new InternalServerErrorException(dbSaveError);
    }
  }
}
