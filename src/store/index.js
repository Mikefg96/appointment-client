import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import services from "@/store/modules/services.store";
import appointments from "@/store/modules/appointments.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    services: services,
    appointments: appointments
  },
  store: store,
  mutations: mutations,
  actions: actions
});
