import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: 1 ,relevance:2,region:"Northern America", End_year:2016 ,likelihood:2 , country:"Lebanon", topic:"gas" ,selectedComponent: 'intensity'},
  reducers: {
    setIntensity: (state, action) => {
      state.filter = action.payload;
    },
    setEndYear:(state,action)=>{
      state.End_year = action.payload;
    },
    setLikelihood:(state,action)=>{
      state.likelihood = action.payload;
    },
    setCountry:(state,action)=>{
      state.country = action.payload;
    },
    setTopic:(state,action)=>{
      state.topic = action.payload;
    },
    setSelectedComponent:(state,action) =>{
      state.selectedComponent = action.payload;
    },
    setRegion:(state,action) =>{
      state.region = action.payload;
    },
    setRelevance:(state,action) =>{
      state.relevance = action.payload;
    }
  }
});

export const {setSelectedComponent,setRegion, setRelevance, setIntensity , setEndYear , setLikelihood ,setCountry , setTopic } = filterSlice.actions; // Export the action creator

export default filterSlice.reducer; // Export the reducer
