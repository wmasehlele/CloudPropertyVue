<template>
  <div class="d-flex flex-row app">      
    <NavigationComponent /> 
    <main class="height-100 app-main">                    
        <ModuleHeaderComponent title="Maintenance"></ModuleHeaderComponent>
        <div class="container-fluid app-content px-0">                                    
            <router-view></router-view>
        </div>
    </main>  
  </div>
</template>

<script>

import NavigationComponent from '@/components/app/NavigationComponent.vue'
import ModuleHeaderComponent from '@/components/app/ModuleHeaderComponent.vue'

export default {
  name: 'MaintenanceView',
  components: {
    NavigationComponent,
    ModuleHeaderComponent
  }
}
</script>