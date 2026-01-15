import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  error: null,
  loading: false,
};

export const ImagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = Array.isArray(action.payload) ? action.payload : [];
      state.loading = false;
      state.error = null;
    },

    addImages: (state, action) => {
      if (!action.payload || !action.payload._id) return;
      state.images.push(action.payload);
    },

    updateImages: (state, action) => {
      if (!action.payload || !action.payload.id) return;

      const index = state.images.findIndex(
        (img) => img._id === action.payload._id
      );

      if (index !== -1) {
        state.images[index] = {
          ...state.images[index],
          ...action.payload,
        };
      }
    },

    removeImages: (state, action) => {
      if (!action.payload) return;

      state.images = state.images.filter((img) => img._id !== action.payload)
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

export const { setImages, addImages, updateImages, removeImages, setLoading, setError, clearError } =
  ImagesSlice.actions;

export default ImagesSlice.reducer;
