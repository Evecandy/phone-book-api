import {
  getAllPersons,
  getAllGroups,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
  getGroup
} from "../controllers/personsController.js";
export const personsRoutes = (app) => {
  app.route("/persons").get(getAllPersons).post(createPerson);

  app.route("/groups").get(getAllGroups);

  app.route("/groups/:groupId").get(getGroup);

  app
    .route("/persons/:id")
    .get(getPerson)
    .put(updatePerson)
    .delete(deletePerson);
};
