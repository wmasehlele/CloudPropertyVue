<template>
  <div class="d-flex flex-row">
    <NavigationComponent /> 
    <main class="height-100 app-main">                    
        <ModuleHeaderComponent title="Dashboard"></ModuleHeaderComponent>
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
  name: 'DashboardView',
  components: {
    NavigationComponent,
    ModuleHeaderComponent
  }
}
</script>
