<template>
    <nav class="bg-danger side-nav" id="side-nav">        
        <!-- <div class="app-name d-flex flex-row align-items-start">
            <router-link class="navbar-brand" :to="{ name: 'dashboard' }"> 
                <i class="bi bi-cloud-arrow-down-fill"></i>
                Cloud Property
            </router-link>
        </div> -->
        <ul class="navbar-nav">
            <li class="nav-item app-name ">    
                <router-link class="navbar-brand" :to="{ name: 'dashboard' }"> 
                    <i class="bi bi-cloud-arrow-down-fill"></i>
                    Cloud Property
                </router-link>            
            </li>            
            <li class="nav-item active">    
                <router-link class="nav-link side-nav-link" :to="{ name: 'dashboard' }"> 
                    <i class="bi bi-speedometer2"></i>
                    Dashboard 
                </router-link>            
            </li>
            <li class="nav-item">
                <router-link class="nav-link side-nav-link" :to="{ name: 'properties' }"> 
                    <i class="bi bi-house"></i>                 
                    Properties                        
                </router-link>    
            </li> 
            <li class="nav-item">
                <router-link class="nav-link side-nav-link" :to="{ name: 'tenants' }"> 
                    <i class="bi bi-person-rolodex"></i>                
                    Tenants                        
                </router-link>    
            </li>                        
            <li class="nav-item">
                <router-link class="nav-link side-nav-link" :to="{ name: 'maintenance' }"> 
                    <i class="bi bi-tools"></i>                 
                    Maintenance                        
                </router-link>    
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComponent',
    props: {
        
    }    
}
</script>

