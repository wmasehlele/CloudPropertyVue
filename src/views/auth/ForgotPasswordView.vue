<template>
  <section class="login">
      <div class="container-fluid">        
        <ForgetPasswordComponent />
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import ForgetPasswordComponent from '@/components/auth/ForgotPasswordComponent.vue'
export default {
    name: 'ForgotPasswordView',
    components: {
        ForgetPasswordComponent
    }
}
</script>