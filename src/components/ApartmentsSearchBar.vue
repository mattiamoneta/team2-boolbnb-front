<template>
  <div class="col-12">
    <div
      class="card card-tile d-block rounded-4 overflow-hidden mb-4 apartment-card p-4"
    >
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
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn ms-btn-outline-black me-2 d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-filter me-1"></i>
          <span>Filtri</span>
        </button>
        <button class="btn ms-btn-outline-primary" type="submit">Cerca</button>
      </form>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade ms-modal ms_gray_color"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
       
        </div> -->
        <div class="modal-body position-relative">
          <button
            type="button"
            class="btn-close position-absolute top-0 end-0 m-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <div class="row justify-content-between p-4">
            <!-- principali -->
            <div class="col-6 mt-5 pe-4">
              <h6
                class="text-uppercase font-semibold mb-5 ms_text_main_darker2"
              >
                Principali
              </h6>
              <ul class="list-unstyled">
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="price">Prezzo (min)</label>
                  <input
                    type="text"
                    class="border rounded ms_w_30"
                    id="price"
                    name="price"
                    value=""
                  />
                </li>
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="size_m2">Metratura (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="size_m2"
                    name="size_m2"
                    value=""
                  />
                </li>
                <li
                  class="mt-3 form-switch p-0 d-flex align-items-center justify-content-between"
                >
                  <label for="available">Disponibile</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="available"
                    name="available"
                    role="switch"
                  />
                </li>
              </ul>
            </div>

            <!-- Caratteristiche -->
            <div class="col-6 mt-5 ps-4">
              <h6
                class="text-uppercase font-semibold mb-5 ms_text_main_darker2"
              >
                Caratteristiche
              </h6>
              <ul class="list-unstyled">
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="beds">Letti (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="beds"
                    name="beds"
                    value=""
                  />
                </li>
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="bedrooms">Stanze (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="bedrooms"
                    name="bedrooms"
                    value=""
                  />
                </li>
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="bathrooms">Bagni (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="bathrooms"
                    name="bathrooms"
                    value=""
                  />
                </li>
              </ul>
            </div>

            <!-- Servizi -->
            <div class="col-12 mt-5 ms_text_main_darker2">
              <h6 class="text-uppercase font-semibold mb-5">Servizi</h6>
              <ul class="list-unstyled row flex-wrap gy-3">
                <li class="d-flex align-items-center gap-2 col-5">
                  <input
                    class="text form-check-input"
                    type="checkbox"
                    id="facility"
                    name="facility"
                    role="switch"
                  />
                  <label for="facility">Wi-fi</label>
                </li>
                <li class="d-flex align-items-center gap-2 col-5">
                  <input
                    class="text form-check-input"
                    type="checkbox"
                    id="facility"
                    name="facility"
                    role="switch"
                  />
                  <label for="facility">Posto macchina</label>
                </li>
                <li class="d-flex align-items-center gap-2 col-5">
                  <input
                    class="text form-check-input"
                    type="checkbox"
                    id="facility"
                    name="facility"
                    role="switch"
                  />
                  <label for="facility">Piscina</label>
                </li>
                <li class="d-flex align-items-center gap-2 col-5">
                  <input
                    class="text form-check-input"
                    type="checkbox"
                    id="facility"
                    name="facility"
                    role="switch"
                  />
                  <label for="facility">Portineria</label>
                </li>
                <li class="d-flex align-items-center gap-2 col-5">
                  <input
                    class="text form-check-input"
                    type="checkbox"
                    id="facility"
                    name="facility"
                    role="switch"
                  />
                  <label for="facility">Sauna</label>
                </li>
                <li class="d-flex align-items-center gap-2 col-5">
                  <input
                    class="text form-check-input"
                    type="checkbox"
                    id="facility"
                    name="facility"
                    role="switch"
                  />
                  <label for="facility">Vista Mare</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button
            type="button"
            class="border-0 bg-white text-decoration-underline ms_text_main_darker"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn ms-btn-outline-primary">
            Mostra risultati
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApartmentsSearchBar",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.ms_w_30 {
  width: 30%;
}
</style>
