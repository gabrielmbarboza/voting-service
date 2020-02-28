import { Schema, model } from 'mongoose';

const AnswerSchema = new Schema({
  label: {
    type: String,
    index: true,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  survey: {
    type: Schema.Types.ObjectId,
    ref: 'Survey'
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'Participant',
  }],
});

export default model('Answer', AnswerSchema);