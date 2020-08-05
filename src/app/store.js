import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import visualizerReducer from '../features/visualizer/visualizerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    visualizer: visualizerReducer,
  },
});
