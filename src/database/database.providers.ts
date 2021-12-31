import * as mongoose from 'mongoose';
import { MONGODB_PROVIDER_CONSTANTS } from 'src/constants';

export const databaseProviders = [
  {
    provide: MONGODB_PROVIDER_CONSTANTS.name,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONGODB_PROVIDER_CONSTANTS.url),
  },
];
