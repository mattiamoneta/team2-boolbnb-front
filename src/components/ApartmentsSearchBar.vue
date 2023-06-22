<template>

<div class="col-12">
    <div class="card card-tile d-block rounded-4 overflow-hidden mb-4 apartment-card p-4">
    <form
          class="d-flex justify-content-center align-items-center"
          role="search"
        >
          <div>
            <i class="fa-solid fa-magnifying-glass ms_light_gray_text"></i>
          </div>
          <input
            class="form-control me-2 border border-0"
            type="search"
            placeholder="Cerca una località"
          />
          <button class="btn ms-btn-outline-primary" type="submit">
            Cerca
          </button>
        </form>
</div>
</div>

</template>

<script>
    export default{
        name: 'ApartmentsSearchBar',
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="scss">

</style>