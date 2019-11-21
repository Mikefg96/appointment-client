import config from "@/../config";
import axios from "axios";

export default {
    createService(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/services/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getServices(onSuccess, onError) {
        return axios
          .get(`${config.host}/services`)
          .then(onSuccess)
          .catch(onError);
    }
};
