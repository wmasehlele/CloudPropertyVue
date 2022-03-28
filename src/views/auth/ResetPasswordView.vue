<template>
  <section class="login">
      <div class="container-fluid">        
        <RestPasswordComponent />
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import RestPasswordComponent from '@/components/auth/ResetPasswordComponent.vue'
export default {
    name: 'RestPasswordView',
    components: {
        RestPasswordComponent
    }
}
</script>