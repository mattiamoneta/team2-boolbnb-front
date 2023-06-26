import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000",
  apiKey: "8WZyDOoy7ND8eeoGrJeUfxODvJmK39q7",
  queryAddress: "",
  querySuggestionsLimit: 6,
  querySuggestions: [],
  radius: 20,
  retApartmnets: {},

  //dati per filtraggio

  filteredApartments: {},

  price: 0,
  size_m2: 0,
  available: 0,
  beds: 0,
  bedrooms: 0,
  bathrooms: 0,
  checkboxOptions: [
    { id: 1, label: "Wi-fi", checked: false },
    { id: 2, label: "Posto Macchina", checked: false },
    { id: 3, label: "Piscina", checked: false },
    { id: 4, label: "Portineria", checked: false },
    { id: 5, label: "Sauna", checked: false },
    { id: 6, label: "Vista Mare", checked: false },
  ],
});

/*
<div
    v-if="
      (singleApartment.price >= store.price,
      singleApartment.size_m2 >= store.size_m2,
      (singleApartment.available = store.available),
      singleApartment.beds >= store.beds,
      singleApartment.bedrooms >= store.bedrooms,
      singleApartment.bathrooms >= store.bathrooms)
    "
  >
    <ApartmentResultCard
      v-for="singleApartment in store.retApartmnets"
      :objApartment="singleApartment"
      hrefURI="/apartment"
    />
</div>
*/
