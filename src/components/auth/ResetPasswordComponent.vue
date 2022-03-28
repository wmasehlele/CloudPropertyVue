<template>
    <div class="row">
        <div class="col-sm-12 col-md-3 offset-md-4">
            <form class="login-form needs-validation" novalidate>
                <div class="mb-3">
                    <div class="form-floating col-sm-12 col-md-12">
                        <div class="form-floating">
                            <input id="title" type="email" name="title" class="form-control shadow-none" placeholder="" value="" required>
                            <label for="title"> Email Address </label>
                        </div>
                    </div>  
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <a class="btn btn-lg shadow-none" v-on:click="login()"> Request password reset </a>
                    <router-link class="pt-2" :to="{ name: 'login' }" > Login </router-link>
                </div>
            </form>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestPasswordComponent',
    props: {
        
    }
}
</script>

