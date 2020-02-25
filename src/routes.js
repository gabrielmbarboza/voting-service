import { Router } from 'express';

import EventController from './app/controllers/EventController';
import SurveyController from './app/controllers/SurveyController';
import AnswerController from './app/controllers/AnswerController';
import ParticipantController from './app/controllers/ParticipantController';

const routes = Router();

/* Events */

routes.get("/events", EventController.index);
routes.get("/events/:id", EventController.show);
routes.post("/events", EventController.store);
routes.put("/events/:id", EventController.update);
routes.delete("/events/:id", EventController.destroy);

/* Surveys */

routes.get("/surveys", SurveyController.index);
routes.get("/surveys/:id", SurveyController.show);
routes.post("/surveys", SurveyController.store);
routes.put("/surveys/:id", SurveyController.update);
routes.delete("/surveys/:id", SurveyController.destroy);

/* Answers */

routes.get("/answers", AnswerController.index);
routes.get("/answers/:id", AnswerController.show);
routes.post("/answers", AnswerController.store);
routes.put("/answers/:id", AnswerController.update);
routes.patch("/answers/:id/add-vote", AnswerController.addVote);
routes.delete("/answers/:id", AnswerController.destroy);

/* Participants */

routes.get("/participants", ParticipantController.index);

export default routes;
