import { configureStore } from "@reduxjs/toolkit";
import { reducer as authreducer } from "../features/slices/Authentication";
import { reducer as swipreducer } from "../features/slices/Swip";
import { reducer as userreducer } from "../features/slices/Users";
import { reducer as matchreducer } from "../features/slices/Matches";

export default configureStore({
  reducer: {
    swipes: swipreducer,
    users: userreducer,
    authentication: authreducer,
    matches: matchreducer,
  },
});
