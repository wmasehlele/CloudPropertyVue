<template>
  <div class="d-flex flex-row">      
    <NavigationComponent /> 
    <main class="height-100 app-main">                    
        <div class="page-header"> 
            <i class="bi bi-list"></i>
            <span class="h5"> Tenants </span>
        </div>
        <div class="container-fluid app-content px-0">    
            TenantsView                                    
            <router-view></router-view>
        </div>
    </main>  
  </div>
</template>

<script>

import NavigationComponent from '@/components/app/NavigationComponent.vue'

export default {
  name: 'TenantsView',
  components: {
    NavigationComponent,
  }
}
</script>