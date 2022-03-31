<template>
    <div class="row login-component">
        <div class="col-sm-12 col-md-3 offset-md-4">
            <form class="login-form needs-validation" novalidate>
                <div class="mb-3 d-flex justify-content-center">
                    <img alt="Vue logo" width="100" src="../../assets/logo.png">
                </div>                   
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="email" type="email" name="email" v-model="login_form.email" class="form-control shadow-none" required>
                            <label for="email"> Email Address </label>
                        </div>
                    </div>  
                </div>
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="password" type="password" name="password" v-model="login_form.password" class="form-control shadow-none" required>
                            <label for="password"> Password </label>
                        </div>
                    </div>  
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 py-2">
                            <a class="btn btn-md btn-primary shadow-none" v-on:click="login()"> Login </a>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex justify-content-md-end py-3">
                            <router-link :to="{ name: 'reset-password' }" > Forgot password? </router-link>
                        </div>
                    </div>
                </div>
                <div class="mb-3 py-2 d-flex justify-content-md-center create-account-wrapper">
                    <router-link class="pt-2" :to="{ name: 'register' }" > Create account </router-link>
                </div>                
            </form>        
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'LoginComponent',
    props: {
        
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    data() {
        return {
            login_form: { email: '', password: '' }
        }
    },    
    methods: {
        ...mapActions ({
            signIn: 'auth/signIn'
        }),
        login () {
            this.signIn (this.login_form).then(() => {
                this.$router.push({ name: 'dashboard' })
            }).catch(() => {
                this.$router.push({ name: '/' })
            })
        }
    }
}
</script>

