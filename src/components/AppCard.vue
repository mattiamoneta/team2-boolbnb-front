<script>
    export default{
        name: 'AppCard',
        data(){
            return{

            }
        }
    }
</script>

<template>
   <div class="col-3">
     <div class="card card-tile flat-shadow drop-shadow-sm rounded-4 overflow-hidden">
        <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="xsmall text-uppercase fw-bolder">milano, italia</div>
            <h6 class="font-secondary text-secondary mb-2">Appartamento Bello Bello Bello</h6>

            <div class="small text-secondary mb-3">
                <i class="fa-solid fa-location-pin me-1 text-muted"></i>
                Via Nonte Napoleone, 3
            </div>
            
            <div class="row align-items-center">
            <div class="col-7 small text-secondary">
                <span class="badge ms-bg-dark">
                    <i class="fa-solid fa-star xsmall text-warning me-1"></i>
                    In Evidenza
                </span>
            </div>
            <div class="col-5 text-end">
                <span class="small fw-bold me-1">€</span>
                <span class="fw-bold">200</span>
                <span class="xsmall">/notte</span>
            </div>
            </div>
        </div>
        
    </div>
   </div>
</template>

<style scoped lang="scss">

</style>