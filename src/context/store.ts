import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './modalSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export { store };
export type { RootState };
