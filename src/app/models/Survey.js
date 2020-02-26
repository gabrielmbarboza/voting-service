import { Schema, model } from 'mongoose';

const SurveySchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'answer',
  }],
});

export default model('Survey', SurveySchema);