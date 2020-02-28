import Event from '../models/Event';

class EventController {
  async index(req, res) {
    const events = await Event.find();

    return res.send({ events });
  }

  async show(req, res) {
    const { id } = req.params;
    const event = await Event.findById(id).populate('surveys', 'question');

    return res.send({ event });
  }

  async store(req, res) {
    const { body } = req;

    const event = await Event.create(body);

    return res.send({ event });
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const event = await Event.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.send({ event });
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Event.findOneAndDelete(id);

    return res.status(204);
  }
}

export default new EventController();