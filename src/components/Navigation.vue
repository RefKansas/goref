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
                <v-list-tile  
                    :to="{ name: 'register' }"
                >
                    <v-list-tile-action>
                        <v-icon></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Register</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile  
                    :to="{ name: 'signin' }"
                >
                    <v-list-tile-action>
                        <v-icon></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Sign In</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile  
                    @click.prevent="signOut"
                >
                    <v-list-tile-action>
                        <v-icon>logout</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Sign Out</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="amber" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title @click.prevent="goHome">Go Ref!</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home', path: 'home', icon: 'home' },
                { title: 'Schedule', path: 'schedule', icon: 'schedule' },
                { title: 'Register', path: 'register', icon: null },
                { title: 'Sign In', path: 'signin', icon: null },
                { title: 'Sign Out', path: null, icon: 'logout' }
            ]
        }
    },
    methods: {
        signOut() {
            this.$router.push({ name: 'home' })
        },
        goHome() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style lang="scss">
    .v-toolbar__title:hover {
        cursor: pointer;
    }
</style>
