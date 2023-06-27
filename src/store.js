import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000",
  apiKey: "2bWSVIuiq0NssskVf6s2MVAdsQ6yPVdh",
  queryAddress: "",
  querySuggestionsLimit: 6,
  querySuggestions: [],
  radius: 20,
  retApartmnets: {}
  
  

  //dati per filtraggio

});
