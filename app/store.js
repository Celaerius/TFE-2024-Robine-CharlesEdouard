import { configureStore } from "@reduxjs/toolkit";
import { reducer as authreducer } from "../features/slices/Authentication";

export default configureStore({
  reducer: {
    authentication: authreducer,
  },
});
