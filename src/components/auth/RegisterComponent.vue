<template>
    <div class="row register-component d-flex justify-content-center">        
        <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="py-3">
                <router-link :to="{ name: 'login' }" > <i class="bi bi-arrow-left-circle fs-2"></i> </router-link>                
            </div>
            <form class="register-form needs-validation" novalidate>                
                <p class="h3 pb-4 text-left"> Create Cloud Property account </p>     
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="name" type="text" name="name" v-model="user.name" class="form-control shadow-none" required>
                            <label for="name"> Name </label>
                        </div>
                    </div>  
                </div>    
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="surname" type="text" name="surname" v-model="user.surname" class="form-control shadow-none" required>
                            <label for="surname"> Surname </label>
                        </div>
                    </div>  
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
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="confirm_password" type="password" name="confirm_password" v-model="user.confirm_password" class="form-control shadow-none" required>
                            <label for="confirm_password"> Confirm Password </label>
                        </div>
                    </div>  
                </div>                
                <div class="mb-3">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 py-2">
                            <a class="btn btn-md btn-primary shadow-none" v-on:click="verifyEmail()"> Next </a>
                        </div>
                    </div>
                </div>            
            </form>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterComponent',
    props: {
        
    },
    data() {
        return {
            user: { 
                name: '',
                surname: '',
                email: '',
                password: '',
                confirm_password: ''                
            }
        }
    },    
    methods: {
        verifyEmail() {
            this.$router.push({ name: "verify-email" })
        }
        
    }
}
</script>

