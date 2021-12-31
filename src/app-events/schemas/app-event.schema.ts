import * as mongoose from 'mongoose';

export const AppEventSchema = new mongoose.Schema({
  event: String,
  date: { type: Date, default: Date.now },
});
