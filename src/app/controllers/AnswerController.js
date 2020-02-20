import Answer from '../models/Answer';

class AnswerController {
  async index(req, res) {
    const answers = await answer.find();

    return res.json(answers);
  }

  async show(req, res) {
    const { id } = req.params;
    const answer = await answer.findById(id);

    return res.json(answer);
  }

  async store(req, res) {
    const { body } = req;

    const answer = answer.create(body);

    return res.json(answer);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const answer = answer.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.json(answer);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await answer.findOneAndDelete(id);

    return res.send();
  }
}

export default new AnswerController();