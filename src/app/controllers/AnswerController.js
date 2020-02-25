import Answer from '../models/Answer';
import Participant from '../models/Participant';

class AnswerController {
  async index(req, res) {
    const answers = await Answer.find();

    return res.json(answers);
  }

  async show(req, res) {
    const { id } = req.params;
    const answer = await Answer.findById(id);

    return res.json(answer);
  }

  async store(req, res) {
    const { body } = req;

    const answer = Answer.create(body);

    return res.json(answer);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const answer = Answer.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.json(answer);
  }

  async addVote(req, res) {
    const { id } = req.params;
    const { email } = req.body;
    const ip = req.connection.remoteAddress;

    Answer.findById(id, (error, answer) => {
      Participant.create({
        email: email,
        ip: ip,
        answer: answer._id,
      });

      answer.updateOne( {
        $inc: {
          votes: 1,
        }, 
      }, (error, response) => { 
        if(error) {
          console.log(error);
        }
        console.log(response);
      });
    });
    
    return res.status(204).send("");
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Answer.findOneAndDelete(id);

    return res.send();
  }
}

export default new AnswerController();