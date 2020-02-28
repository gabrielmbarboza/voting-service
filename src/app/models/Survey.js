import { Schema, model } from 'mongoose';

const SurveySchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer',
  }],
});

export default model('Survey', SurveySchema);