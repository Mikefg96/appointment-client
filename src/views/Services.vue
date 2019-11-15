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
    <div v-else>
        {{serviceToRegister}}
    </div>
</template>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600&display=swap');

    .services-wrapper {
        height: 100vh;
        width: 100%;
        background-color: #f5f8ff;

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
                text-align: right !important;
            }
        }
    }
</style>

<script>
import { mapGetters } from "vuex";
const storeModule = "services";

export default {
    name: 'services',
    data() {
        return {
            isRegistering: false,
            serviceToRegister: {}
        }
    },
    methods: {
        getServices() {
            this.$store.dispatch(`${storeModule}/getServices`);
        },
        loadRegisterForm(service) {
            this.isRegistering = true;
            this.serviceToRegister = service;
        }
    },
    computed: {
		...mapGetters(storeModule, ["availableServices"])
	},
    mounted() {
        this.getServices();
    }
}
</script>
