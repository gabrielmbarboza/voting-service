import { Schema, model } from 'mongoose';

const VotingSchema = new Schema({
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

export default model('Voting', VoteSchema);