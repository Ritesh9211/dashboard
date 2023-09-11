import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice"; // Import your slice reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    filter: filterReducer, // Assign your slice reducer under the 'filter' key
    EndYear: filterReducer,
    likelihood: filterReducer,
    country:filterReducer,
    topic:filterReducer,
    relevance:filterReducer,
    region:filterReducer,
    setcomponent:filterReducer,
  },
});

export default store;
