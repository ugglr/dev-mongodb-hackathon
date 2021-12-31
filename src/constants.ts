export const MONGODB_PROVIDER_CONSTANTS = {
  name: 'MONGODB_CONNECTION',
  url: process.env.MONGODB_URL || 'mongodb://localhost/dev-hackathon',
};

export const APP_EVENT_CONSTANTS = {
  model: 'APP_EVENT_MODEL',
  db_collection: 'app-events',
};
