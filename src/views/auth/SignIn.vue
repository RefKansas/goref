<template>
	<v-container class="sign-in">
		<v-layout>
			<v-flex xs12>
				<form>
					<p class="display-1">Sign In</p>
					<v-flex xs12 sm6>
						<v-text-field
							v-model="email"
							:rules="[rules.required]"
							name="email"							
							label="E-mail"
							required
						>
						</v-text-field>
					</v-flex>
					<v-flex xs12 sm6>
						<v-text-field
							v-model="password"
							:append-icon="showPassword ? 'visibility' : 'visibility_off'"
							:rules="[rules.required]"
							:type="showPassword ? 'text' : 'password'"
							name="password"
							label="Password"
							counter
							@click:append="showPassword = !showPassword"
						>
						</v-text-field>	
					</v-flex>					
					<p v-if="feedback">{{ feedback }}</p>
					<v-btn @click.prevent="login">Sign In</v-btn>					
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import firebase from 'firebase'

	export default {
		data() {
			return {
				email: null,
				password: null,
				feedback: null,
				showPassword: false,
				rules: {
					required: value => !!value || 'Required.'
				}				
			}
		},
		methods: {
			login() {
				if (this.email && this.password) {
					firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(userCredential => {
						console.log(userCredential.user)
						this.$router.push({ name: 'home' })
					}).catch(err => {
						this.feedback = err.message
					})
					this.feedback = null
				} else {
					this.feedback = 'Please fill in both fields'
				}
			}
		}						
	}
</script>

<style lang="sass">

</style>

