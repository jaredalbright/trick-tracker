import http from "../http-common";

class trickDataService {
  getAll() {
    return http.get(`/trickDB`);
  }

  getByName(name) {
    name = name.trim();
    if (name === '') {
      return this.getAll();
    }
    return http.get(`/trickDB?name=${name}`);
  }

  getByQuery(query){
    return http.get(
      `/trickDB?edge=${query.edge}&rotation=${query.rotation}&side=${query.switch}&invert=${query.invert}&rotation direction=${query.rDirection}`
    );
  }

  addToTrickList(data) {
    return http.post("/", data);
  }

  getByUserName(query) {
    return http.get(`/user?user_name=${query.user_name}`);
  }

  updateTrick(id, data) {
    return http.put(`/user?id=${id}`, data);
  }

  deleteTrick(id) {
    return http.delete(`/user?id=${id}`);
  }

}

export default new trickDataService();
