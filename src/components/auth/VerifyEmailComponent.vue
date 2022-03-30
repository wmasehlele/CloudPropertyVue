<template>
    <div class="row verify-email-component">
        <div class="col-sm-12 col-md-3 offset-md-4">
            <div class="pt-5">
                <router-link :to="{ name: 'register' }" > <i class="bi bi-arrow-left-circle fs-2"></i> </router-link>                
            </div>            
            <form class="verify-email-form needs-validation" novalidate>
                <div class="mb-3">
                    <label> A verification code has been sent to your email. </label>
                </div>
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="title" type="email" name="title" v-model="user.verification_code" class="form-control shadow-none" required>
                            <label for="title"> Verification Code </label>
                        </div>
                    </div>  
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 py-2">
                            <a class="btn btn-md btn-primary shadow-none" v-on:click="submitEmailVerificationCode()"> Submit Code </a>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex justify-content-md-end py-3">
                            <a class="pt-2" v-on:click="resendVerificationCode()"> Re-send code </a>
                        </div>
                    </div>
                </div>                                
            </form>         
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestPasswordComponent',
    props: {
        
    },
    data() {
        return {
            user: { 
                email: '', 
                verification_code: '' 
            }
        }
    },
    methods: {
        submitEmailVerificationCode () {
            this.$router.push({ name: "dashboard" })
        },
        resendVerificationCode() {
            this.$router.push({ name: "dashboard" })
        }        
    }
}
</script>

