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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Boolbnb</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
   

                    <li class="nav-item dropstart">
                        <a id="navbarDropdown" class="nav-link user-dropdown fw-bold px-3 py-1"
                        data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" v-pre>
                            <span class="align-middle">Area Utente</span>
                            <div class="user-icon ms-bg-dark align-middle">
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </a>

                    </li>
                </ul>

          
            </div>
        </div>
    </nav>
    <!-- End Navbar -->

    <!-- Offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title font-secondary" id="offcanvasExampleLabel">Menu</h5>
        <div class="offcanvas-right d-flex align-items-center">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        </div>
        <div class="offcanvas-body">
            <ul class="list-unstyled">
        
                <li>
                    <!-- <button class="my-3 btn ms-btn-outline-primary rounded-4 btn-sm w-100" href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                    <i class="fa-solid fa-right-from-bracket me-2"></i>
                    {{ __('Logout') }}
                    </button> -->
                </li>
            </ul>

        
        </div>
    </div>
  <!-- End Offcanvas -->
</template>

<style scoped lang="scss">

</style>