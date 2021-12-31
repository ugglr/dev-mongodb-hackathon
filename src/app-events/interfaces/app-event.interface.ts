import { Document } from 'mongoose';

export interface AppEventInterface extends Document {
  readonly event: string;
  readonly date: Date;
}
