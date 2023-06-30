import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000",
  apiKey: "aVjvNWJ9xnYI72ZDUSFsELvlUkaTS9kP",
  queryAddress: "",
  querySuggestionsLimit: 6,
  querySuggestions: [],
  radius: 20,
  retApartmnets: {},

  //dati per filtraggio
});
