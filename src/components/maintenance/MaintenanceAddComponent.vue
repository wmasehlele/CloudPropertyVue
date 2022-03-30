<template>
    <form class="needs-validation" novalidate>
        <div class="row g-3 justify-content-start">
            <div class="col-12 d-flex justify-content-between">
                <p class="fs-6"> ISSUE CATEGORY </p>    
            </div>
            <div class="form-floating col-sm-12 col-md-3">
                <select id="category" name="category_id" class="form-select shadow-none"  aria-label="Floating label select example">
                    <option value="0"></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="category"> Category </label>                
            </div>
            <div class="form-floating col-sm-12 col-md-3">
                <select id="sub_category" name="sub_category_id" class="form-select shadow-none"  aria-label="Floating label select example">
                    <option value="0"></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="sub_category"> Sub Category </label>                   
            </div>
            <div class="form-floating col-sm-12 col-md-3">        
                <select id="issue" name="issue_id" class="form-select shadow-none"  aria-label="Floating label select example">
                    <option value="0"></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="issue"> Issue </label>                  
            </div>
            <div class="form-floating col-sm-12 col-md-3">
                <select id="sub_issue" name="sub_issue_id" class="form-select shadow-none"  aria-label="Floating label select example">
                    <option value="0"></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="sub_issue"> Sub Issue </label>                  
            </div>

            <div class="col-12 mt-4">
                <p class="fs-6"> ISSUE DESCRIPTION </p>
            </div>  
            
            <div class="form-floating col-sm-12 col-md-12">
                <div class="form-floating">
                    <input id="title" type="text" name="title" class="form-control shadow-none" placeholder="" value="" required>
                    <label for="title"> Title </label>
                </div>
            </div>        

            <div class="form-floating col-sm-12 col-md-12">
                <div class="form-floating">
                    <textarea class="form-control" placeholder="" id="description" style="height: 100px"></textarea>
                    <label for="description"> Description </label>
                </div>                
            </div>

            <div class="col-sm-12 col-md-12 pt-3 d-flex justify-content-end">
                <button class="btn btn-md btn-danger px-3 mx-1" id="submit_maintenance" type="submit" > Submit  </button>                  
                <router-link class="btn btn-md btn-danger px-3 mx-1" id="submit_maintenance" :to="{ name: 'maintenance' }" > 
                    Cancel 
                </router-link>                  
            </div>             
        </div>             
    </form>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>
