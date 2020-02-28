import Survey from '../models/Survey';
import Event from '../models/Event';
import Answer from '../models/Answer';

class SurveyController {
  async index(req, res) {
    const surveys = await Survey.find();

    return res.send({ surveys });
  }

  async show(req, res) {
    const { id } = req.params;
    const survey = await Survey.findById(id).populate('answer');

    return res.send({ survey });
  }

  async store(req, res) {
    try {
      const { question, description, answers, event_id } = req.body;
      
      const event = await Event.findById(event_id);

      const survey = await Survey.create({ question: question, description: description, event: event._id});
      
      answers.map(answer => {
        const surveyAnswer = new Answer({...answer, survey: survey._id });     
        surveyAnswer.save().then(answer => survey.answers.push(answer));
      });

      await survey.save().then((survey) => {
        event.surveys.push(survey);
      });

      await event.save();

      return res.send({ survey });
    } catch (error) {
      return res.status(400).send({ error: 'Something terrible happened here!' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const survey = Survey.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.send({ survey });
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Survey.findOneAndDelete(id);

    return res.status(204);
  }
}

export default new SurveyController();