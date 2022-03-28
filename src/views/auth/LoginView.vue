<template>
  <section class="login">
      <div class="container-fluid">        
        <LoginComponent />
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import LoginComponent from '@/components/auth/LoginComponent.vue'

export default {
    name: 'LoginView',
    components: {
        LoginComponent
    }
}
</script>