import { Schema, model } from 'mongoose';

const QuizSchema = new Schema({
  title: {
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

export default model('Quiz', QuizSchema);