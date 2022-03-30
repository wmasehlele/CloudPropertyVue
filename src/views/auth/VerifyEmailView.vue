<template>
  <section class="login">
      <div class="container-fluid">        
        <VerifyEmailComponent />
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import VerifyEmailComponent from '@/components/auth/VerifyEmailComponent.vue'
export default {
    name: 'ForgotPasswordView',
    components: {
        VerifyEmailComponent
    }
}
</script>