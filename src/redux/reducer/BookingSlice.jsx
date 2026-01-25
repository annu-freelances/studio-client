import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
  error: null,
  loading: false,
};

export const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.booking = Array.isArray(action.payload) ? action.payload : [];
      state.loading = false;
      state.error = null;
    },

    addBooking: (state, action) => {
      if (!action.payload || !action.payload._id) return;
      state.booking.push(action.payload);
    },

    updateteBooking: (state, action) => {
      if (!action.payload || !action.payload.id) return;

      const index = state.booking.findIndex(
        (img) => img._id === action.payload._id
      );

      if (index !== -1) {
        state.booking[index] = {
          ...state.booking[index],
          ...action.payload,
        };
      }
    },

    removeBooking: (state, action) => {
      if (!action.payload) return;

      state.booking = state.booking.filter((img) => img._id !== action.payload)
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

export const { setBooking, addBooking, updateteBooking, removeBooking, setLoading, setError, clearError } =
  BookingSlice.actions;

export default BookingSlice.reducer;
