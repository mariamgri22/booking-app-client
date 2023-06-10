import { Service } from "../feature/servicesSlice";

export const filterServicesHelper = (services: Service[], searchQuery: string) => {
  if (!searchQuery || searchQuery.trim() === "") {
    return services;
  }

  const searchLower = searchQuery.toLowerCase();
  return services.filter((service: Service) =>
    service.description.toLowerCase().includes(searchLower)
  );
};
