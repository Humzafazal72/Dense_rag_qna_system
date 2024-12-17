import { transformMessageFormat } from "@/utils/transformMessageFormat";
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatMessages",
  initialState: {
    messages: [],
  },
  reducers: {
    setInitialMessages: (state, action) => {
      state.messages = transformMessageFormat(action.payload);
    },
    addMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { setInitialMessages, addMessage, clearMessages } =
  chatSlice.actions;
export default chatSlice.reducer;
