import { Service } from "../feature/servicesSlice";

export const groupServicesByCategoryHelper = (services: Service[] = []) => {
  const groupedServices: { [key: string]: Service[] } = {};

  services.forEach((service: Service) => {
    if (Object.prototype.hasOwnProperty.call(groupedServices, service.category)) {
      groupedServices[service.category].push(service);
    } else {
      groupedServices[service.category] = [service];
    }
  });

  return groupedServices;
};
