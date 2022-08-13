<template>
    <div class="bg-light px-0 py-3 fixed-top page-header" id="page-header"> 
        <div class="row">
            <div class="col-8">
                <div class="d-flex flex-row align-items-center">
                    <div class="mr-3 humburger-menu-icon" id="humbuger" v-on:click="hideShowSideMenu()">
                        <i class="bi bi-list m-0"></i>
                    </div>
                    <div class="mr-0">
                        <span class="h5 m-0"> {{ title }} </span>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="d-flex justify-content-end">
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
                                        <strong> {{ user.name }} </strong>
                                        <p> 
                                            <small>
                                                <router-link class="fw-normal" :to="{ name: 'login' }" > Manage Account </router-link>
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
    mounted: function () {
        this.hideSideMenu()
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
        },
        hideShowSideMenu () {
            if ( document.getElementById("side-nav").offsetWidth > 100 ) {
                this.hideSideMenu();
            } else {
                this.showSideMenu();
            }
        },
        hideSideMenu() {        
            document.getElementById("side-nav").style.cssText = "width:64px";
            document.getElementById("page-header").style.cssText = "margin-left:64px";
            document.getElementById("app-main").style.cssText = "margin-left:64px";
        },
        showSideMenu() {        
            document.getElementById("side-nav").style.cssText = "width:250px";
            document.getElementById("page-header").style.cssText = "margin-left:250px";
            document.getElementById("app-main").style.cssText = "margin-left:250px";
        }
    }
}
</script>

