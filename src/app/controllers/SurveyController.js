import Survey from '../models/Survey';

class SurveyController {
  async index(req, res) {
    const surveys = await Survey.find();

    return res.json(surveys);
  }

  async show(req, res) {
    const { id } = req.params;
    const survey = await Survey.findById(id);

    return res.json(survey);
  }

  async store(req, res) {
    const { body } = req;

    const survey = Survey.create(body);

    return res.json(survey);
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