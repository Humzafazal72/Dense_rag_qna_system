import { createSlice } from "@reduxjs/toolkit";

export const deleteConversationSlice = createSlice({
  name: "deleteConversation",
  initialState: {
    isDeleteModalOpen: false,
  },
  reducers: {
    openDeleteConvoModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeDeleteConvoModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
});

export const { openDeleteConvoModal, closeDeleteConvoModal } =
  deleteConversationSlice.actions;
export default deleteConversationSlice.reducer;
