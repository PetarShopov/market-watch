import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { authSlice } from "./slices/authSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<AppStore["getState"]>

export type AppDispatch = ReturnType<AppStore["dispatch"]>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<AppStore>(makeStore)
