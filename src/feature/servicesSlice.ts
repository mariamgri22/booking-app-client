import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiWithoutAuth } from "../apiWithoutAuth";
import { saveToLocalStorage } from "../helpers/localStorageHelper";

export interface Service {
  id: number;
  description: string;
  price: number;
  duration: string;
  category: string;
}

interface ServicesResponse {
  services: Service[];
}

const fetchServices = createAsyncThunk("services/fetchServices", async () => {
  const response = await apiWithoutAuth.get<ServicesResponse>("/services");
  console.log(response.data);

  return response.data;
});

export interface ServicesState {
  services: Service[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedServices: number[];
  count: number;
}

const initialState: ServicesState = {
  services: [],
  status: "idle",
  error: null,
  selectedServices: [],
  count: 0,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    toggleServiceSelectionStore: (state, action) => {
      const serviceId = action.payload;
      if (state.selectedServices.includes(serviceId)) {
        state.count -= 1;
        state.selectedServices = state.selectedServices.filter(
          (id) => id !== serviceId
        );
        saveToLocalStorage("selectedServices", state.selectedServices);
      } else {
        state.count += 1;
        state.selectedServices = [...state.selectedServices, serviceId];
        saveToLocalStorage("selectedServices", state.selectedServices);
      }
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchServices };
export const { toggleServiceSelectionStore } =
  servicesSlice.actions;

export default servicesSlice.reducer;
