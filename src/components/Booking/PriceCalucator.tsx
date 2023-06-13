import { getFromLocalStorage } from "../../helpers/localStorageHelper";

export const PriceCalculator = () => {
  const selectedServicesArray = getFromLocalStorage("selectedServices");

  const totalPrice = selectedServicesArray.reduce(
    (total: number, { price }: { price: number }) => total + price,
    0
  );

  return <span>Total Price: {totalPrice} AMD</span>;
};
