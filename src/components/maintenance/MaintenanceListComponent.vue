<template>
    <div class="row justify-content-center">
        <div class="col-md-5 d-flex justify-content-start">
            <div class="btn-group align-self-start">
                <button class="btn btn-md bg-light text-dark shadow-none px-3" type="button">
                    Status - {{ currentFilter.current_status }}
                </button>
                <button type="button" class="btn btn-md btn-danger shadow-none dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-chevron-down"></i>
                </button>
                <ul class="dropdown-menu p-0">
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequests()">All</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(1, 'New')">New</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(2, 'In Review')">In Review</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(3, 'In Progress')">In Progress</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(4, 'Completed')">Completed</a></li>
                </ul>
            </div> 
            <div class="btn-group align-self-start px-2">
                <button class="btn btn-md bg-light text-dark shadow-none px-3" type="button">
                    Priority - {{ currentFilter.current_priority }}
                </button>
                <button type="button" class="btn btn-md btn-danger shadow-none dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-chevron-down"></i>
                </button>
                <ul class="dropdown-menu p-0">
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequests()">All</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(1)">Low</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(1)">Medium</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(1)">High</a></li>
                    <li><a class="dropdown-item" href="#" v-on:click="getMaintenanceRequestsByStatusId(1)">Critical</a></li>
                </ul>
            </div>             
            <div class="">
                <input id="search" type="search" name="search" class="form-control shadow-none" placeholder="Search" v-model="currentFilter.search_phrase" required>
            </div>            
        </div>

        <div class="col-md-7 d-flex flex-row-reverse">
            <router-link class="btn btn-md btn-danger px-3" :to="{ name: 'maintenance-add' }"> 
                <i class="bi bi-plus-lg"></i>
                Add New 
            </router-link>
        </div>    
  
        <div class="col-md-12 py-0">
            
            <div class="card maintenance-card my-3 py-0 priority-maintenance" v-for="maintenance in resultQuery" :key="maintenance.id">
                <div class="card-body py-2">
                    <div class="row">
                        <div class="col-sm-12 col-md-3">
                            <p><small class="m-0 text-start text-muted"> Issue: </small></p>
                            <p id="title"> {{ maintenance.title }} </p>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <p><small class="m-0 text-start text-muted"> Logged by: </small></p>
                            <p id="logged_by"> {{ maintenance.unit }} - {{ maintenance.tenant }} </p>
                        </div>  
                        <div class="col-sm-12 col-md-2">
                            <p><small class="m-0 text-start text-muted"> Service Agent: </small></p>
                            <p id="service_agent"> {{ maintenance.service_agent }} </p>
                        </div>        
                        <div class="col-sm-12 col-md-2">
                            <p><small class="m-0 text-start text-muted"> Date Logged: </small></p>
                            <p id="created"> {{ maintenance.created_at }} </p>
                        </div>  
                        <div class="col-sm-12 col-md-1">
                            <p><small class="m-0 text-start text-muted"> Priority: </small></p>
                            <p id="created"> {{ maintenance.priority }} </p>
                        </div>  
                        <div class="col-sm-12 col-md-2 maintenance-item-action d-flex">
                            <div class="matenance-item-status me-auto">
                                <p><small class="m-0 text-start text-muted"> Status: </small></p>
                                <p class="font-weight-bold"> {{ maintenance.status }} </p>
                            </div>                            
                            <div>
                                <a class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu p-0">
                                    <li>
                                        <router-link class="dropdown-item" :to="{ name: 'maintenance-view' }"> View </router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" :to="{ name: 'maintenance-view' }"> Edit </router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" :to="{ name: 'maintenance-view' }"> Print </router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item text-danger" :to="{ name: 'maintenance-view' }"> Delete </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>                                                                                                    
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
    export default {
        mounted() {
            //this.getMaintenanceRequests();    
        },
        data() {
            return {
                currentFilter: {
                    current_status: 'All',
                    current_priority: 'All',
                    search_phrase: ''
                },
                maintenanceList: [
                    {
                        "id": 1,
                        "title": "Plumbing / Toilet / Leaking / When Booting",
                        "description": "Pipes are overlowing",
                        "status_id": 1,
                        "status": "New",
                        "priority_id": 1,
                        "priority": "Low",
                        "category_id": 1,
                        "category": "Appliances",
                        "sub_category_id": 1,
                        "sub_category": "Celling Fan",
                        "issue_id": 1,
                        "issue": "Door",
                        "property_id": 1,
                        "property": "Tamboti",
                        "unit_id": 1,
                        "unit": "B25",
                        "tenant_id": 1,
                        "tenant": "Masehlele Moela",
                        "service_agent_id": 1,
                        "service_agent": "William",
                        "owner_id": 1,
                        "owner": "William",
                        "created_at": "2022-03-01 02:03:51"
                    },
                    {
                        "id": 2,
                        "title": "Plumbing / Toilet / Leaking / When Dying",
                        "description": "Pipes are overlowing",
                        "status_id": 2,
                        "status": "In Review",
                        "priority_id": 1,
                        "priority": "Low",
                        "category_id": 1,
                        "category": "Appliances",
                        "sub_category_id": 1,
                        "sub_category": "Celling Fan",
                        "issue_id": 1,
                        "issue": "Door",
                        "property_id": 1,
                        "property": "Tamboti",
                        "unit_id": 1,
                        "unit": "B25",
                        "tenant_id": 1,
                        "tenant": "Masehlele Moela",
                        "service_agent_id": 1,
                        "service_agent": "William",
                        "owner_id": 1,
                        "owner": "William",
                        "created_at": "2022-03-01 02:03:51"
                    },
                    {
                        "id": 3,
                        "title": "Plumbing / Toilet / Leaking / When flushed",
                        "description": "Pipes are overlowing",
                        "status_id": 3,
                        "status": "In Progress",
                        "priority_id": 1,
                        "priority": "Low",
                        "category_id": 1,
                        "category": "Appliances",
                        "sub_category_id": 1,
                        "sub_category": "Celling Fan",
                        "issue_id": 1,
                        "issue": "Door",
                        "property_id": 1,
                        "property": "Tamboti",
                        "unit_id": 1,
                        "unit": "B25",
                        "tenant_id": 1,
                        "tenant": "Masehlele Moela",
                        "service_agent_id": 1,
                        "service_agent": "William",
                        "owner_id": 1,
                        "owner": "William",
                        "created_at": "2022-03-01 02:03:51"
                    }
                ]
            }
        },
        computed: {
            resultQuery() {
                if (this.currentFilter.search_phrase) {
                        return this.maintenanceList.filter(item => {
                            return this.currentFilter.search_phrase
                                .toLowerCase()
                                .split(" ")
                                .every(v => item.title.toLowerCase().includes(v) );
                        }
                    );
                } else {
                    return this.maintenanceList;
                }
            }
        },        
        methods: {
            
            currentFilterRest() {
                this.currentFilter = {
                    current_status: 'All',
                    current_priority: 'All',
                    search_phrase: ''  
                }
            },

            getMaintenanceRequests() {
                var _this = this;
                const axios = require('axios')
                axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                axios.get('http://127.0.0.1:8000/api/maintenance', {"Access-Control-Allow-Origin": "*"})
                .then(response => {
                    _this.maintenanceList = response.data                    
                })
                this.currentFilterRest()
            },

            getMaintenanceRequestsByStatusId(status_id, description) {
                var _this = this;     
                const axios = require('axios')   
                axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';        
                axios.get('http://127.0.0.1:8000/api/maintenance/'+status_id, {"Access-Control-Allow-Origin": "*"})
                .then(response => {
                    _this.maintenanceList = response.data                    
                    _this.currentFilter.current_status = description
                })
            }            
        }
    }
</script>