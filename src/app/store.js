import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import floorNumber from '../components/FloorNumber/floorSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    floorNumber
  },
});
