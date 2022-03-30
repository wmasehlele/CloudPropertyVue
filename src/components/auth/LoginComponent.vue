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
                            <input id="email" type="email" name="email" v-model="user.email" class="form-control shadow-none" required>
                            <label for="email"> Email Address </label>
                        </div>
                    </div>  
                </div>
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="password" type="password" name="password" v-model="user.password" class="form-control shadow-none" required>
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
export default {
    name: 'LoginComponent',
    props: {
        
    },
    data() {
        return {
            user: { email: '', password: '' }
        }
    },    
    methods: {
        login() {
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>

