<script>
    export default{
        name: 'AppHeader',
        data(){
            return{

            }
        },
        methods: {

        }
    }
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg ms-bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Boolbnb</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
               
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title font-secondary" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
                        <li class="nav-item">
                            <a class="nav-link small-link" aria-current="page" href="#">Chi Siamo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link small-link" aria-current="page" href="#">Supporto</a>
                        </li>
                       

                    </ul>

                    <a id="" href="#" class="nav-link user-dropdown fw-bold px-3 py-1 ms_border_primary ms-bg-dark">
                        <span class="align-middle text-white">Area Utente</span>
                        <div class="user-icon ms-bg-light align-middle">
                            <i class="fa-solid fa-user ms_text_main_darker"></i>
                        </div>
                    </a>
                </div>

          

            </div>
        </div>
    </nav>
    <!-- End Navbar -->
  
</template>

<style scoped lang="scss">

</style>