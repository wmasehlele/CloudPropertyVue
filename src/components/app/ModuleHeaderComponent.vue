<template>
    <div class="page-header d-flex justify-content-between"> 
        <div>
            <i class="bi bi-list"></i>
            <span class="h5 title"> {{ title }} </span>
        </div>
        <div> 
            <div class="btn-group align-self-start">
                <button class="btn btn-md bg-none text-dark shadow-none px-3" type="button">
                    
                </button>
                <button type="button" class="btn btn-md btn-danger shadow-none profile dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person"></i>
                </button>
                <ul class="dropdown-menu p-0">
                    <li><a class="dropdown-item">Profile</a></li>
                    <li><a class="dropdown-item">Account</a></li>
                    <li><a class="dropdown-item" v-on:click="logout()">Logout</a></li>
                </ul>
            </div>            
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ModuleHeaderComponent',
    props: {
        title: String
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    data(){
        return {
            loggedinuser: {
                name: ''
            }
        }
    },
    methods: {
        ...mapActions({
            signOut: 'auth/signOut'
        }),
        logout () {
            this.signOut().then(() => {
                this.$router.replace({ name: 'login' });
            })
        }
    }
}
</script>

