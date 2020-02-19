import Event from '../models/Event';

class EventController {
  async index(req, res) {
    const events = await Event.find();

    return res.json(events);
  }

  async show(req, res) {
    const { id } = req.params;
    const event = await Event.findById(id);

    return res.json(event);
  }

  async store(req, res) {
    const { body } = req;

    const event = Event.create(body);

    return res.json(event);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const event = Event.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.json(event);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Event.findOneAndDelete(id);

    return res.send();
  }
}

export default new EventController();