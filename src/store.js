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

});
