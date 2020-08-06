import { configureStore } from '@reduxjs/toolkit';
import visualizerReducer from '../features/visualizer/visualizerSlice';

export default configureStore({
  reducer: {
    visualizer: visualizerReducer,
  },
});
