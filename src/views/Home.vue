<template>
	<div class="landing-wrapper">
		<div class="row">
			<div class="col-6">
				<h1>Appointment.</h1>
				<h2>Sin espera, sin demora.</h2>
				<div>
					<d-button id="btnCatalogue" theme="info" @click="loadServices()">Revisar catálogo</d-button>
					<d-button id="btnAppointments" outline theme="info" @click="loadAppointments()">Ver citas</d-button>
				</div>
			</div>
			<div class="col-6">
				<img src="../assets/img/undraw_doctor.svg" alt="Doctor">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	methods: {
		loadServices() {
			this.$router.push({ path: 'services' });
		},
		loadAppointments() {
			this.$router.push({ path: 'appointments' });
		}
	}
}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css?family=Raleway:100,400,600&display=swap');

	.landing-wrapper {
		height: 100vh;
		width: 100%;
		padding: 0 5%;
		background-color: #f5f8ff;
		overflow: hidden;

		.row {
			height: 100%;

			div:first-child,
			div:nth-child(2) {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			div:first-child {

				h1, h2 { font-family: 'Raleway', sans-serif; }
				h1 { font-size: 4em; font-weight: 600; }
				h2 { font-weight: 100; margin-bottom: 5%;}
				text-align: center;

				div {
					width: 100%;

					button { margin: 1%; }
				}
			}

			div:nth-child(2) {
				img {
					max-width: 100%;
				}
			}
		}
	}
</style>