import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalSliceProps = {
  text: string;
  isOpen?: boolean;
  btnLabel?: string;
  onClose?: () => void;
};
const initialState: ModalSliceProps = {
  isOpen: false,
  btnLabel: 'Confirmar',
  text: '',
};
const modalSliceObj = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalSliceProps>) => {
      state.isOpen = true;
      state.text = action.payload.text;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  },
});

const { showModal, closeModal } = modalSliceObj.actions;
const modalSlice = modalSliceObj.reducer;

export { showModal, closeModal, modalSlice };
