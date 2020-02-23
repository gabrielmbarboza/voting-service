import Survey from '../models/Survey';

class SurveyController {
  async index(req, res) {
    const surveys = await survey.find();

    return res.json(surveys);
  }

  async show(req, res) {
    const { id } = req.params;
    const survey = await survey.findById(id);

    return res.json(survey);
  }

  async store(req, res) {
    const { body } = req;

    const survey = survey.create(body);

    return res.json(survey);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const survey = survey.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.json(survey);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await survey.findOneAndDelete(id);

    return res.send();
  }
}

export default new SurveyController();