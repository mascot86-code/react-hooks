import { createSlice} from "@reduxjs/toolkit";
import { carsList } from "./DataCars";


const carsSlice = createSlice({
  name: 'cars',
  initialState: carsList,
  reducers: {}
})


export default carsSlice.reducer;