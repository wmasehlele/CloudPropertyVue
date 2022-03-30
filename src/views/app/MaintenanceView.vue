<template>
  <div class="d-flex flex-row app">      
    <NavigationComponent /> 
    <main class="height-100 app-main">                    
        <div class="page-header"> 
            <i class="bi bi-list"></i>
            <span class="h5"> Maintenance </span>
        </div>
        <div class="container-fluid app-content px-0">                                    
            <router-view></router-view>
        </div>
    </main>  
  </div>
</template>

<script>

import NavigationComponent from '@/components/app/NavigationComponent.vue'

export default {
  name: 'MaintenanceView',
  components: {
    NavigationComponent,
  }
}
</script>