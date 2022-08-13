<template>
    <NavigationComponent />
    <main class="app-main" id="app-main">                    
        <ModuleHeaderComponent title="Dashboard"></ModuleHeaderComponent>
        <div class="app-content px-0">
            hello   
            <router-view></router-view>
        </div>
    </main> 
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
