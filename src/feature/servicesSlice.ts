import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiWithoutAuth } from "../apiWithoutAuth";
import { saveToLocalStorage } from "../helpers/localStorageHelper";
import { ServicesResponse, ServicesState } from "../types/Service";

const fetchServices = createAsyncThunk("services/fetchServices", async () => {
  const response = await apiWithoutAuth.get<ServicesResponse>("/services");
  console.log(response.data);

  return response.data;
});

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
    setCount: (state) => {
      state.count = 0;
    },
    setSelectedArrayNull: (state) => {
      state.selectedServicesArray = [];
    },
    setSelectedNull: (state) => {
      state.selectedServices = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export { fetchServices };
export const {
  toggleServiceSelectionStore,
  setCount,
  setSelectedArrayNull,
  setSelectedNull,
} = servicesSlice.actions;

export default servicesSlice.reducer;
