<template>
    <div class="services-wrapper" v-if="!isRegistering">
        <div class="row">
            <div class="col-4" align="center" :key="service._id" v-for="service in availableServices">
                <d-card>
                    <d-card-img :src="service.imgUrl" top/>
                    <d-card-body>
                        <h3>{{service.name}}</h3>
                        <p>${{service.price}}</p>
                    </d-card-body>
                    <d-card-footer>
                        <d-btn theme="info" @click="loadRegisterForm(service)">Agendar cita</d-btn>
                    </d-card-footer>
                </d-card>
            </div>
        </div>
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
                        <!-- <d-form> -->
                            <d-input class="mb2" placeholder="Nombre" v-model="name" name="name"/>
                            <d-input class="mb2" placeholder="Apellido" v-model="lastName" name="lastName"/>
                            <VueCtkDateTimePicker v-model="appointmentDate"></VueCtkDateTimePicker>
                            <d-button id="btnRegister" class="mt2 mr2" theme="success" @click="addAppointment()">Agendar</d-button>
                            <d-button class="mt2 ml2" theme="danger" outline @click="returnToServices()">Regresar</d-button>
                        <!-- </d-form> -->
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
            isRegistering: false,
            serviceToRegister: {},
            appointmentDate: null
        }
    },
    methods: {
        getServices() {
            this.$store.dispatch(`${servicesModule}/getServices`);
        },
        loadRegisterForm(service) {
            this.isRegistering = true;
            this.serviceToRegister = service;
        },
        returnToServices() {
            this.isRegistering = false;
            this.serviceToRegister = {}
        },
        addAppointment() {
            const appointment = {
                name: this.name,
                lastName: this.lastName,
                date: this.appointmentDate,
                service_id: this.serviceToRegister._id
            }
            
            this.$store.dispatch(`${appointmentsModule}/createAppointment`, appointment);
            this.$router.push({ path: '/' });
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

    .services-wrapper {
        height: 100vh;
        width: 100%;
        background-color: #f5f8ff;
        overflow: hidden;

        display: flex;
        align-items: center;

        .card {
            height: 100%;
            width: 75%;

            img {
                height: 30vh;
            }

            .card-body {
                text-align: center;

                h3 { font-family: 'Raleway', sans-serif; font-weight: 600; font-size: 2.5em; }
                p { font-weight: 100; font-size: 3em; }
            }

            .card-footer {
                text-align: right;
            }
        }
    }

    .register-wrapper {
        height: 100vh;
        width: 100%;
        background-color: #f5f8ff;

        .row {
            height: 100%;
            width: 100%;
            align-content: center;
        }
    }
</style>
