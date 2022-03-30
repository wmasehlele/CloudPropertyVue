<template>
  <section class="login">
      <div class="container-fluid">         
        <RegisterComponent />
    </div>
  </section>
</template>
<script>
// @ is an alias to /src
import RegisterComponent from '@/components/auth/RegisterComponent.vue'

export default {
    name: 'RegisterView',
    components: {
        RegisterComponent
    }
}
</script>