import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: [],
  error: null,
  loading: false,
};

export const CustomersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customer = Array.isArray(action.payload) ? action.payload : [];
      state.loading = false;
      state.error = null;
    },

    addCustomers: (state, action) => {
      if (!action.payload || !action.payload._id) return;
      state.customer.push(action.payload);
    },

    updatetedCustomers: (state, action) => {
      if (!action.payload || !action.payload.id) return;

      const index = state.customer.findIndex(
        (img) => img._id === action.payload._id
      );

      if (index !== -1) {
        state.customer[index] = {
          ...state.customer[index],
          ...action.payload,
        };
      }
    },

    removeCustomers: (state, action) => {
      if (!action.payload) return;

      state.customer = state.customer.filter((img) => img._id !== action.payload)
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setCustomers, addCustomers, updatetedCustomers, removeCustomers, setLoading, setError, clearError } =
  CustomersSlice.actions;

export default CustomersSlice.reducer;
