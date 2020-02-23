import { Schema, model } from 'mongoose';

const ParticipantSchema = new Schema({
  email: {
    type: String,
  },
  ip: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  answer: {
    type: Schema.Types.ObjectId,
    ref: 'answer',
  },
});

export default model('Participant', ParticipantSchema);