import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://localhost:8000",
  apiKey: "It7H0HICqzyS1hERG7cd3PqjoXz9VAlb",
  queryAddress: "",
  querySuggestionsLimit: 6,
  querySuggestions: [],
  radius: 20,
  retApartmnets: {},

  //dati per filtraggio
});
