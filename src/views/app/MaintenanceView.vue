<template>
    <NavigationComponent />
    <main class="app-main" id="app-main">                    
        <ModuleHeaderComponent title="Maintenance"></ModuleHeaderComponent>
        <div class="app-content px-0">
            <router-view></router-view>
        </div>
    </main> 
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