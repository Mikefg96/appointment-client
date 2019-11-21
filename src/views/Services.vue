<template>
    <div class="services-wrapper" v-if="!isRegisteringAppointment && !isRegisteringService">
        <div>
            <d-card>
                <d-card-body>
                    <table class="table tc">
                        <thead class="bg-light">
                            <tr>
                                <th scope="col" class="border-0">#</th>
                                <th scope="col" class="border-0">Tipo de Cita</th>
                                <th scope="col" class="border-0">Costo</th>
                                <th scope="col" class="border-0">Disponibilidad</th>
                                <th scope="col" class="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :key="service._id" v-for="(service, index) in availableServices">
                                <td>{{ index + 1 }}</td>
                                <td>{{ service.name }}</td>
                                <td>${{ service.price }}</td>
                                <td>
                                    <d-badge theme="success">DISPONIBLE</d-badge>
                                </td>
                                <td>
                                    <d-btn class="btnLoadAppointmentForm" theme="info" @click="loadAppointmentRegisterForm(service)" outline>Agendar cita</d-btn>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </d-card-body>
            </d-card>
            <d-btn id="btnReturnToLanding" theme="danger" class="fr mt2" outline @click="returnToLanding()">Regresar</d-btn>
            <d-btn id="btnLoadServiceRegister" theme="success" class="fr mt2 mr2" @click="loadServiceRegisterForm()">+ Servicio</d-btn>
        </div>
    </div>
    <div class="serviceRegister-wrapper" v-else-if="!isRegisteringAppointment && isRegisteringService">
        <d-card style="max-width: 300px">
            <d-card-header>Adición de servicio</d-card-header>
            <d-card-body>
                <d-input class="mb2" placeholder="Nombre" v-model="serviceName" name="serviceName"/>
                <d-input class="mb2" placeholder="Precio" type="number" v-model="servicePrice" name="servicePrice"/>
                <d-button id="btnAddService" class="mt2 mr2" theme="success" @click="addService()">Añadir</d-button>
                <d-button class="mt2 ml2 btnReturnToServices" theme="danger" outline @click="returnToServices()">Regresar</d-button>
            </d-card-body>
        </d-card>
    </div>
    <div class="register-wrapper" v-else>
        <div class="row">
            <div class="col-6" align="center">
                <img class="w-80" src="../assets/img/undraw_fill_forms.svg" alt="">
            </div>
            <div class="col-6" align="center">
                <d-card style="max-width: 300px">
                    <d-card-header>{{ serviceToRegister.name }}</d-card-header>
                    <d-card-body>
                        <d-input class="mb2" placeholder="Nombre" v-model="name" name="name"/>
                        <d-input class="mb2" placeholder="Apellido" v-model="lastName" name="lastName"/>
                        <VueCtkDateTimePicker v-model="appointmentDate"></VueCtkDateTimePicker>
                        <d-button id="btnRegister" class="mt2 mr2" theme="success" @click="addAppointment()">Agendar</d-button>
                        <d-button class="mt2 ml2 btnReturnToServices" theme="danger" outline @click="returnToServices()">Regresar</d-button>
                    </d-card-body>
                    <d-card-footer class="tl">Costo: ${{serviceToRegister.price}}</d-card-footer>
                </d-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
const servicesModule = "services";
const appointmentsModule = "appointments"

export default {
    name: 'services',
    data() {
        return {
            isRegisteringAppointment: false,
            serviceToRegister: {},
            name: null,
            lastName: null,
            appointmentDate: null,
            isRegisteringService: false,
            serviceName: null,
            servicePrice: null
        }
    },
    methods: {
        getServices() {
            this.$store.dispatch(`${servicesModule}/getServices`);
        },
        loadServiceRegisterForm() {
            this.isRegisteringAppointment = false;
            this.isRegisteringService = true;
        },
        loadAppointmentRegisterForm(service) {
            this.isRegisteringAppointment = true;
            this.serviceToRegister = service;
        },
        returnToServices() {
            this.isRegisteringAppointment = false;
            this.isRegisteringService = false;
            this.serviceToRegister = {}
        },
        returnToLanding() {
            this.$router.push({ path: '/' });
        },
        addAppointment() {
            const appointment = {
                name: this.name,
                lastName: this.lastName,
                date: this.appointmentDate,
                service_id: this.serviceToRegister._id
            }

            this.$store.dispatch(`${appointmentsModule}/createAppointment`, appointment);
            this.$router.push({ path: '/' }).then(() => {
                this.$toasted.show("¡Has agendado exitosamente la cita!", {
                    type: "success",
                    action: {
                        text: "Okay",
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        }
                    }
                });
            });
        },
        addService() {
            const service = {
                name: this.serviceName,
                price: this.servicePrice
            }

            this.$store.dispatch(`${servicesModule}/createService`, service).then(() => {
                this.$toasted.show("¡El servicio ha sido añadido!", {
                    type: "success",
                    action: {
                        text: "Okay",
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        }
                    }
                });
                this.isRegisteringService = false;  
            });
        }
    },
    computed: {
		...mapGetters(servicesModule, ["availableServices"])
	},
    mounted() {
        this.getServices();
    }
}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600&display=swap');

    .services-wrapper,
    .register-wrapper,
    .serviceRegister-wrapper {
        height: 100vh;
        width: 100%;
        background-color: #f5f8ff;

        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .register-wrapper {
        .row {
            height: 100%;
            width: 100%;
            align-content: center;
        }
    }
</style>
