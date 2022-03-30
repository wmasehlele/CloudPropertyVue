<template>
    <div class="row forgot-password-component">
        <div class="col-sm-12 col-md-3 offset-md-4">
            <div class="pt-5">
                <router-link :to="{ name: 'login' }" > <i class="bi bi-arrow-left-circle fs-2"></i> </router-link>                
            </div>            
            <form class="forgot-password-form needs-validation" novalidate>
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="email" type="email" name="email" v-model="user.email" class="form-control shadow-none" required>
                            <label for="email"> Email Address </label>
                        </div>
                    </div>  
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 py-2">
                            <a class="btn btn-md btn-primary shadow-none" v-on:click="login()"> Request password reset </a>
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
            user: { email: ''}
        }
    }
}
</script>

