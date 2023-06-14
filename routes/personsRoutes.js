import {
  getAllPersons,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} from "../controllers/personsController.js";
export const personsRoutes = (app) => {
  app.route("/persons").get(getAllPersons).post(createPerson);

  app
    .route("/persons/:phonenumber")
    .get(getPerson)
    .put(updatePerson)
    .delete(deletePerson);
};
