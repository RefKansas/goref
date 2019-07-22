/* eslint-disable */
<template>
    <v-container class="register">
      <v-layout>
        <v-flex xs12>
          <form>
            <p class="display-1">Register</p>
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
                v-model="alias"
                :rules="[rules.required]"
                name="alias"							
                label="Alias"
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
            <v-btn @click.prevent="register">Register</v-btn>					
          </form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import functions from 'firebase/functions'

export default {
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      showPassword: false,
      rules: {
        required: value => !!value || 'Required.'
      },      
      slug: null    
    }
  },
  methods: {
    register() {

      if (!this.alias || !this.email || !this.password) {
        return this.feedback = 'You must enter all fields'        
      }

      console.log('Registering...')    
      
      this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
      })

      console.log('slug: ', this.slug)

      db.collection('users').where('slug', '==', this.slug)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {     
            console.log('OK to register new user')             
            this.feedback = null
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(userCredential => {              
              db.collection('users').doc(this.slug).set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: userCredential.user.uid
              })
            }).then(() => {
                this.$router.push({ name: 'home' })
            })
            .catch(err => {
                console.log(err)
                this.feedback = err.message
            })
          } else {
            this.feedback = 'User alias already exists'
          }
        })
        .catch(error => {
          this.feedback = error.message
        })
      }
    }
  }    
</script>



