import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import formSlice from "./formSlice";

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        form: formSlice.reducer,
    }
});
