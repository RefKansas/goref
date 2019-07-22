<template>
    <div class="nav">
        <v-navigation-drawer
        fixed
        v-model="drawer"
        app
        >
            <v-list dense>
                <v-list-tile  
                    :to="{ name: 'home' }"
                >
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile  
                    :to="{ name: 'schedule' }"
                >
                    <v-list-tile-action>
                        <v-icon>schedule</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Schedule</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="amber" fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <v-btn flat class="headline text-none" @click="goHome">
                    <span class="font-weight-light">Go</span>
                    <span>Ref!</span>
                </v-btn>                
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="!user" flat @click="signIn">
                <span>Sign In</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
            <v-btn v-if="!user" flat @click="register">
                <span>Register</span>
                <v-icon right>account_circle</v-icon>
            </v-btn>
            <span v-if="user">Welcome, {{ user.email }}</span>
            <v-btn v-if="user" flat @click="signOut">
                <span>Sign Out</span>
                <v-icon right>power_settings_new</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'Navigation',
    data() {
        return {
            drawer: false,
            user: null
        }
    },
    methods: {
        signOut() {
            firebase.auth().signOut().then(() => {                                
                this.$router.push({ name: 'home' })
            })            
        },
        goHome() {
            this.$router.push({ name: 'home' })
        },
        register() {
            this.$router.push({ name: 'register' })
        },
        signIn() {
            this.$router.push({ name: 'signin' })
        }
    },
    created() {			
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('sign in user: ', user)
                this.user = user
            } else {
                console.log('sign out user')
                this.user = null
            }
        })
    }	    
}
</script>

<style lang="scss">

</style>
