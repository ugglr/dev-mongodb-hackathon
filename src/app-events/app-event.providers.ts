import { Connection } from 'mongoose';
import { APP_EVENT_CONSTANTS, MONGODB_PROVIDER_CONSTANTS } from 'src/constants';
import { AppEventSchema } from './schemas/app-event.schema';

export const appEventsProviders = [
  {
    provide: APP_EVENT_CONSTANTS.model,
    useFactory: (connection: Connection) =>
      // First parameter determines the collection name in the db.
      connection.model(APP_EVENT_CONSTANTS.db_collection, AppEventSchema),
    inject: [MONGODB_PROVIDER_CONSTANTS.name],
  },
];
