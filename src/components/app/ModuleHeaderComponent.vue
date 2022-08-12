<template>
    <div class="page-header header-component"> 
        <div class="row">
            <div class="col-sm-8 col-md-8">
                <i class="bi bi-list"></i>
                <span class="h5 title"> {{ title }} </span>
            </div>
            <div class="col-sm-4 col-md-4 d-flex flex-row-reverse">
                <div class="btn-group">
                    <button type="button" class="btn btn-md btn-none pt-1 shadow-none dropdown-toggle dropdown-toggle-split profile-menu" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-bell text-dark"></i>
                    </button>
                    <ul class="dropdown-menu py-0">
                        <li>
                            <a class="dropdown-item py-2 d-flex flex-row">
                                <div>
                                    <strong> Notifications </strong>
                                </div>
                            </a>
                        </li>
                        <li><hr/></li>
                        <li>
                            <a class="dropdown-item d-flex flex-row py-2" v-on:click="logout()">
                                <div class="">
                                    <small> New maintenance request created </small>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex flex-row py-2" v-on:click="logout()">
                                <div class="">
                                    <small> New maintenance request created </small>
                                </div>
                            </a>
                        </li>
                    </ul>


                    <button type="button" class="btn btn-md btn-danger text-center shadow-none dropdown-toggle dropdown-toggle-split profile-menu" data-bs-toggle="dropdown" aria-expanded="false">
                        MW
                    </button>
                    <ul class="dropdown-menu py-0">
                        <li>
                            <a class="dropdown-item py-3 d-flex flex-row">
                                <div class="text-light profile-image d-flex align-items-center justify-content-center">
                                    MW
                                </div>
                                <div>
                                    <p>{{ user.name }}</p>
                                    <p> 
                                        <small>
                                            <router-link :to="{ name: 'login' }" > Manage Account </router-link>
                                        </small> 
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li><hr/></li>
                        <li>
                            <a class="dropdown-item d-flex flex-row" v-on:click="logout()">
                                <div class="d-flex align-items-center justify-content-center">
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </div>
                                <div class="d-flex align-items-center pt-2 justify-content-center">
                                    <p> Logout </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex flex-row">
                                <div class="d-flex align-items-center justify-content-center">
                                    <i class="bi bi-headset"></i>
                                </div>
                                <div class="d-flex align-items-center pt-1 justify-content-center">
                                    <p class="ml-5 "> Support </p>
                                </div>                                
                            </a>
                        </li>
                    </ul>
                </div>            
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

        }
    },
    methods: {
        ...mapActions({
            signOut: 'auth/signOut'
        }),
        logout () {
            this.signOut().then(() => {
                this.$router.replace({ name: 'login' });
            }).catch(() => {
                console.log('error occured')
                location.reload();
            })
        }
    }
}
</script>

