import Participant from '../models/Participant';

class ParticipantController {
  async index(req, res) {
    const participants = await Participant.find().populate('answer');

    return res.send({ participants });
  }
}

export default new ParticipantController();