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
  selectedServices: [];
  selectedServicesArray: Service[];
  count: number;
}

const initialState: ServicesState = {
  services: [],
  status: "idle",
  error: null,
  selectedServices: [],
  selectedServicesArray: [],
  count: 0,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    toggleServiceSelectionStore: (state, action) => {
      const serviceId = action.payload;
      const selectedServiceIndex = state.selectedServices.indexOf(serviceId);

      if (selectedServiceIndex !== -1) {
        state.count -= 1;
        state.selectedServices.splice(selectedServiceIndex, 1);
        state.selectedServicesArray = state.selectedServicesArray.filter(
          (service) => service.id !== serviceId
        );
        saveToLocalStorage("selectedServices", state.selectedServicesArray);
      } else {
        const service = state.services.find(
          (service) => service.id === serviceId
        );
        if (service) {
          state.count += 1;
          state.selectedServices.push(serviceId);
          state.selectedServicesArray.push(service);
          saveToLocalStorage("selectedServices", state.selectedServicesArray);
        }
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
export const { toggleServiceSelectionStore } = servicesSlice.actions;

export default servicesSlice.reducer;
