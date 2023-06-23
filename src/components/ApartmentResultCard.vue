<template>

    <div class="card card-tile flat-shadow d-block rounded-4 overflow-hidden drop-shadow-sm mb-4 apartment-card">
        <div class="row">
            <div class="col-5">
                <img :src="`${store.baseUrl}/storage/${objApartment['cover_image']}`" alt="" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="col-7">
                <div class="card-body py-4 h-100">
                    <div class="xsmall text-uppercase fw-bolder">milano, italia</div>
                    <h4 class="mb-5">{{ objApartment['title'] }}</h4>
                    
                    <div class="row h-100">
                        <div class="col-6 h-100">
                            <div class="small text-secondary mb-3">
                                <i class="fa-solid fa-location-pin me-1 text-muted"></i>
                                {{objApartment['address']}}
                            </div>
                        </div>
                        <div class="col-6 text-end h-100">
                            <span class="small fw-bold me-1">€</span>
                            <span class="fw-bold">{{objApartment['price']}}</span>
                            <span class="xsmall">/notte</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { store } from "../store";

    export default{
        name:'ApartmentResultCard',
        data(){
            return{
                store 
            }
        },
        methods: {
            
        },
        props: {
            objApartment: Object
        }
    }
</script>

<style scoped lang="scss">
</style>