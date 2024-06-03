
import { configureStore } from "@reduxjs/toolkit";
import fightSlice from "../features/fight/fightSlice";

export const store = configureStore({
    reducer: {
        fight: fightSlice
    },
});