import config from "@/../config";
import axios from "axios";

export default {
    getServices(onSuccess, onError) {
        return axios
          .get(`${config.host}/services`)
          .then(onSuccess)
          .catch(onError);
    }
};
