import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar";
import deleteConvoSlicer from "./modal/deleteConversation";
import chatReducer from "./chatMessages";
import pfpReducer from "./pfp";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    deleteConvoModal: deleteConvoSlicer,
    chat: chatReducer,
    pfp: pfpReducer,
  },
});

export default store;
