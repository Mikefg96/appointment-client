import config from "@/../config";
import axios from "axios";

export default {
    createAppointment(params = {}, onSuccess, onError) {
        return axios
          .post(`${config.host}/appointments/create`, params)
          .then(onSuccess)
          .catch(onError);
    },
    getAppointments(onSuccess, onError) {
        return axios
            .get(`${config.host}/appointments`)
            .then(onSuccess)
            .catch(onError);
    },
    deleteAppointment(appointment_id, onSuccess, onError) {
        return axios
            .get(`${config.host}/appointments/delete/${appointment_id}`)
            .then(onSuccess)
            .catch(onError);
    }
};
