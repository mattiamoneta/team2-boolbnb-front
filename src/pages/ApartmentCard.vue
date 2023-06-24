<script>
  import AppSearchBar from "../components/AppSearchBar.vue";

  import { store } from "../store";
  import axios from 'axios';

export default {

  name: "ApartmentCard",
  data() {
    return {
      scrollPos:0,
      apartmentDetails: null
    };
  },
  components:{
    AppSearchBar
  },
    methods:{
        handleScroll(){
            this.scrollPos = window.scrollY;
        },

        getApartmentDetails(id) {
          axios.get(`${this.store.baseUrl}/api/apartment/${id}`)
              .then(response => {

                  if (response.data.success == true) {
                      this.apartmentDetails = response.data.results;
                      console.log(this.apartmentDetails);
                  } else {
                      console.error(response.data.error);
                  }

              })

          }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted(){
      const id = this.$route.params.id;
      /*this.getApartmentDetails(id); // In attesa di SHOW nelle API */
    }
};
</script>

<template>
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <div class="container py-5">
          <!-- Search Bar -->
            <div class="row">
              <!-- !!!SEARCH BAR QUI!!! -->
                <div class="col-12">

                        <AppSearchBar :showFilters="false"/>
                </div>
            </div>
            <!-- End Search Bar -->
      <div class="row mt-4">
        <div class="col">
              <div class="card card-tile rounded-4 flat-shadow overflow-hidden">
                  <img src="https://picsum.photos/2000/500" alt="" class="w-100 card-img-top object-fit-cover apartment-cover-image">
                  <div class="card-body mt-4 p-4">
                   
                    <div class="row pb-2 mb-5 border-bottom">
                     <div class="col-10">
                        <h2 class="font-semibold">
                          Appartamento Bello Bello
                        </h2>
                     </div>
                     <div class="col-2 text-end">
                       <div class="badge ms-bg-dark">
                        <i class="fa-solid fa-eye text-light me-2"></i>
                        <span class="xsmall text-uppercase fw-bolder text-light">
                          disponibile
                        </span>
                       </div>

                     </div>
                    </div>


                   <div class="row">

                    <!-- LEFT SIDE: Apartment details -->
                      <div class="col-8 pe-4">
                      
                        <!-- Price/Address Row -->
                        <div class="row">
                          <!-- Address -->
                          <div class="col-6">
                              <!-- Provincia -->
                              <div class="xsmall text-uppercase fw-bolder mb-1">
                                  milano, italia
                              </div>

                              <!-- Indirizzo -->
                              <div class=" text-muted">
                                <i class="fa-solid fa-location-pin text-muted me-1"></i>
                                  Via Roma, 3
                              </div>
                          </div>
                          <!-- End Address -->

                          <!-- Price -->
                          <div class="col-6 text-end">
                              <h2 class="fw-bold mb-0">
                                <span class="small font-primary text-muted">€</span>
                                220
                              </h2>
                              <div class="font-secondary xsmall text-muted fw-bold">/notte</div>
                          </div>
                          <!-- End Price -->
                        </div> 
                        <!-- End Price/Address Row -->

                        <!-- Description Row -->

                        <div class="row py-5">
                          <div class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2">
                                  descrizione
                          </div>

                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptatum repudiandae recusandae! Aliquid, accusantium soluta? Enim inventore voluptatibus voluptates ducimus aliquid optio voluptatum vel quidem, quod obcaecati reiciendis nulla laboriosam recusandae. Distinctio dolores libero sit, delectus at ipsam voluptas id non veritatis amet ea unde suscipit ex maiores expedita earum.</p>
                        </div>
                        <!-- End Description Row -->


                        <!-- Features -->
                        <div class="row mb-5 py-3">
                          <div class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2">
                                  caratteristiche
                          </div>

                          <!-- Rooms Amount -->
                          <div class="col-3">
                            <div class="card card-tile drop-shadow-sm">
                              <div class="card-body text-center">
                                <div class="icon mb-2">
                                  <i class="fa-solid fa-door-open fs-5"></i>
                                </div>
                                <div>Stanze</div>
                                <div class="amount fw-bold">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>

                           <!-- Beds Amount -->
                           <div class="col-3">
                            <div class="card card-tile drop-shadow-sm">
                              <div class="card-body text-center">
                                <div class="icon mb-2">
                                  <i class="fa-solid fa-bed fs-5"></i>
                                </div>
                                <div>Letti</div>
                                <div class="amount fw-bold">
                                  3
                                </div>
                              </div>
                            </div>
                          </div>

                           <!-- Bathrooms Amount -->
                           <div class="col-3">
                            <div class="card card-tile drop-shadow-sm">
                              <div class="card-body text-center">
                                <div class="icon mb-2">
                                  <i class="fa-solid fa-restroom fs-5"></i>
                                </div>
                                <div>Bagni</div>
                                <div class="amount fw-bold">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>

                            <!-- Room Size -->
                            <div class="col-3">
                            <div class="card card-tile drop-shadow-sm">
                              <div class="card-body text-center">
                                <div class="icon mb-2">
                                  <i class="fa-solid fa-house fs-5"></i>
                                </div>
                                <div>Dimensione</div>
                                <div class="amount fw-bold">
                                  32
                                  <span class="small">
                                    m<sup>2</sup>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <!-- End Features -->

                        <!-- Services Row -->
                        <div class="row mb-5">
                          <div class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2">
                                  servizi
                          </div>

                          <div class="row">
                            <div class="col-4">
                                <ul class="list-unstyled">
                                  <li class="my-2">
                                    <i class="fa-solid fa-wifi me-1"></i>
                                    Wifi
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-car me-1"></i>
                                    Posto Macchina
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-water-ladder me-1"></i>
                                    Piscina
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-door-open me-1"></i>
                                    Portineria
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-hot-tub-person me-1"></i>
                                    Sauna
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-water me-1"></i>
                                    Vista Mare
                                  </li>
                                </ul>
                            </div>

                            <div class="col-4">
                              <ul class="list-unstyled">
                                  <li class="my-2">
                                    <i class="fa-solid fa-wifi me-1"></i>
                                    Wifi
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-car me-1"></i>
                                    Posto Macchina
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-water-ladder me-1"></i>
                                    Piscina
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-door-open me-1"></i>
                                    Portineria
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-hot-tub-person me-1"></i>
                                    Sauna
                                  </li>
                                  <li class="my-2">
                                    <i class="fa-solid fa-water me-1"></i>
                                    Vista Mare
                                  </li>
                                </ul>
                            </div>

                            <div class="col-4">
                              <div class="card">
                                <div class="card-body">
                                  <div class="xsmall text-uppercase fw-bolder ms_text_main_darker2 mb-2">
                                      ALTRO
                                  </div>
                                  Lorem ipsum dolor sit amet.
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <!-- End Services Row -->

                      </div>
                      <!-- End LEFT SIDE: Apartment details -->

                      <!-- RIGHT SIDE: Contacts -->
                      <div class="col-4 border-start">
                            <h5 class="text-center fw-bold">Contatti</h5>
                      </div>
                      <!-- End RIGHT SIDE: Contacts -->
                   </div>
                  

                  </div>
              </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

  .apartment-cover-image{
    height: 200px;
  }

</style>
