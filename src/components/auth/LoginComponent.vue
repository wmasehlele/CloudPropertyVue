<template>
    <div class="row login-component d-flex justify-content-center">
        <div class="col-sm-12 col-md-3 col-lg-3">
            <form class="login-form needs-validation" novalidate>
                <div class="pt-5 d-flex justify-content-center">
                    <i class="bi bi-cloud-arrow-down-fill text-danger"></i>
                </div>  
                <p class="h3 pb-4 text-center"> Welcome back to Cloud Property </p>                 
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
                        <div class="col-sm-12 col-md-12 text-center">
                            <router-link :to="{ name: 'reset-password' }" > Forgot password? </router-link>
                        </div>                        
                        <div class="col-sm-12 col-md-12 text-center py-4 d-grid gap-2">
                            <a class="btn btn-lg btn-primary shadow-none" v-on:click="login()"> Login </a>
                        </div>
                        <div class="col-sm-12 col-md-12 text-center">
                            Don’t have an account yet? <router-link class="pt-2" :to="{ name: 'register' }" > Sign up </router-link>
                        </div>                                
                    </div>
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
            this.$router.push({ name: 'dashboard' })
            this.signIn (this.login_form).then(() => {
                this.$router.push({ name: 'dashboard' })
            }).catch(() => {
                this.$router.push({ name: '/' })
            })
        }
    }
}
</script>

