import servicesApi from "@/api/services.api";

const state = {
    services: []
};

const getters = {
    availableServices: state => state.services
};

const mutations = {
    PUSH_SERVICES(state, services) {
        state.services = services;
    }
};

const actions = {
    // Regresa todas los servicios disponibles
    getServices({ commit }) {
        servicesApi.getServices(
            result => {
                commit('PUSH_SERVICES', result.data.data)
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
