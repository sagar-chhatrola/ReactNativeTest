import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tvShowApi } from './services/show'

export const store = configureStore({
  reducer: {  
    [tvShowApi.reducerPath]: tvShowApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvShowApi.middleware),
})

setupListeners(store.dispatch)