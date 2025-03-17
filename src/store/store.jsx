import userReducer from '../UserReducer'
import carsReducer from '../CarsReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    users: userReducer,
    cars: carsReducer,
  }
})

export default store