export interface Service {
  id: number;
  description: string;
  price: number;
  duration: string;
  category: string;
}

export interface ServicesResponse {
  services: Service[];
}

export interface ServicesState {
  services: Service[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedServices: number[];
  selectedServicesArray: Service[];
  count: number;
}
