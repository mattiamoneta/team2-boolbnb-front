import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000",
  apiKey: "ZPskuspkrrcmchd9ut4twltuw96h5bWH",
  queryAddress: "",
  querySuggestionsLimit: 6,
  querySuggestions: [],
  radius: 20,
  retApartmnets: {},

  //dati per filtraggio

  filteredApartments: {},
});
