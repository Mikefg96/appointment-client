<template>
    <div class="appointments-wrapper">
        <div>
            <d-card>
                <d-card-body>
                    <table class="table mb-0 tc">
                        <thead class="bg-light">
                            <tr>
                                <th scope="col" class="border-0">#</th>
                                <th scope="col" class="border-0">Nombre</th>
                                <th scope="col" class="border-0">Apellido</th>
                                <th scope="col" class="border-0">Tipo</th>
                                <th scope="col" class="border-0">Fecha</th>
                                <th scope="col" class="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :key="appointment._id" v-for="(appointment, index) in availableAppointments">
                                <td>{{ index + 1 }}</td>
                                <td>{{ appointment.name }}</td>
                                <td>{{ appointment.lastName }}</td>
                                <td>{{ appointment.service_id.name }}</td>
                                <td>{{ appointment.date }}</td>
                                <td>
                                    <d-button id="btnDeleteAppointment" theme="danger" outline  @click="deleteAppointment(appointment._id, index)">ELIMINAR</d-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </d-card-body>
            </d-card>
            <d-button id="btnReturnToLanding" theme="info" class="mt-2 fr" outline @click="returnToLanding()">Regresar</d-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
const appointmentsModule = "appointments"

export default {
    name: 'appointments',
    data() {
        return {
        }
    },
    methods: {
        getAppointments() {
            this.$store.dispatch(`${appointmentsModule}/getAppointments`);
        },
        deleteAppointment(appointment_id, index) {
            const data = {
                appointment_id: appointment_id,
                index: index
            }
            this.$store.dispatch(`${appointmentsModule}/deleteAppointment`, data).then(() => {
                this.$toasted.show("¡Has eliminado una cita!", {
                    type: "error",
                    action: {
                        text: "Okay",
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        }
                    }
                });
            });
        },
        returnToLanding() {
            this.$router.push({ path: '/' });
        }
    },
    computed: {
        ...mapGetters(appointmentsModule, ["availableAppointments"])
	},
    mounted() {
        this.getAppointments();
    }
}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600&display=swap');

    .appointments-wrapper {
        height: 100vh;
        width: 100%;
        background-color: #f5f8ff;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .pointer:hover {
        cursor: pointer;
    }
</style>
