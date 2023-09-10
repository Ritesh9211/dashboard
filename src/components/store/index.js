import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice"; // Import your slice reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    filter: filterReducer, // Assign your slice reducer under the 'filter' key
    // You can add more reducers here if needed
  },
});

export default store;
