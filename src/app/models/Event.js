import { Schema, model } from 'mongoose';

const EventSchema = new Schema({
  organization: {
    type: String,
    require: true,
  },
  program: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
  },
  startAt: {
    type: Date,
    default: Date.now,
  },
  endAt: {
    type: Date,
  },
  surveys: [{
    type: Schema.Types.ObjectId,
    ref: 'Survey',
  }],
});

export default model('Event', EventSchema);