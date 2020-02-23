import { Router } from 'express';

import EventController from './app/controllers/EventController';
import SurveyController from './app/controllers/SurveyController';

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

export default routes;
