import Participant from '../models/Participant';

class ParticipantController {
  async index(req, res) {
    const participants = await Participant.find();

    return res.json(participants);
  }
}

export default new ParticipantController();