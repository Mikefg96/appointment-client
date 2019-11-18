import appointmentsApi from "@/api/appointments.api";

const state = {
    appointments: []
};

const getters = {
    availableAppointments: state => state.appointments
};

const mutations = {
    PUSH_APPOINTMENTS(state, appointments) {
        state.appointments = appointments;
    },
    DELETE_APPOINTMENT(state, data) {
        state.appointments.splice(data.index, 1);
    }
};

const actions = {
    // Agenda una nueva cita.
    createAppointment({ commit }, data) {
        appointmentsApi.createAppointment(data,
            result => {
                // TODO: '¿Cómo se hace cuando no quieres commitear nada?'
                commit("", result.data);
            },
            error => {
                return error;
            }
        );
    },
    // Regresa todas las citas agendadas
    getAppointments({ commit }) {
        appointmentsApi.getAppointments(
            result => {
                commit("PUSH_APPOINTMENTS", result.data.data);
            },
            error => {
                return error;
            }
        );
    },
    deleteAppointment({ commit }, data) {
        appointmentsApi.deleteAppointment(data.appointment_id,
            result => {
                commit("DELETE_APPOINTMENT", result.data);
                return true;
            },
            error => {
                return error;
            }
        );
    }
};

export default {
    namespaced: true,
    state: {
        ...state
    },
    getters: {
        ...getters
    },
    mutations,
    actions
};
