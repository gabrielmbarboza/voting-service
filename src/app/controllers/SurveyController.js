import Survey from '../models/Survey';

class SurveyController {
  async index(req, res) {
    const surveys = await Survey.find();

    return res.json(surveys);
  }

  async show(req, res) {
    const { id } = req.params;
    const survey = await Survey.findById(id).populate('answer');

    return res.json(survey);
  }

  async store(req, res) {
    try {
      const { question, description, answers } = req.body;

      const survey = await Survey.create({ question: question, description: description });
      answers.map(answer => {
        const surveyAnswer = new answer({...answer, survey: survey._id });
        
        surveyAnswer.save().then(answer => survey.answers.push(answer));
      });

      await survey.save();

      return res.send({ survey });
    } catch (error) {
      return res.status(400).send({ error: 'Error creating a new Survey' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const survey = Survey.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.json(survey);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Survey.findOneAndDelete(id);

    return res.send();
  }
}

export default new SurveyController();