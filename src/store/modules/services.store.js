import servicesApi from "@/api/services.api";

const state = {
    services: []
};

const getters = {
    availableServices: state => state.services
};

const mutations = {
    GET_SERVICES(state, services) {
        state.services = services;
    },
    PUSH_SERVICE(state, service) {
        state.services.push(service);
    }
};

const actions = {
    getServices({ commit }) {
        servicesApi.getServices(
            result => {
                commit('GET_SERVICES', result.data.data)
            },
            error => {
                return error;
            }
        );
    },
    createService({ commit }, data) {
        servicesApi.createService(data,
            result => {
                commit("PUSH_SERVICE", result.data.obj);
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
