import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { getFromLocalStorage } from "../../helpers/localStorageHelper";

export const PriceCalculator = () => {
  const selectedServicesArray =
    useSelector((state: RootState) => state.services.selectedServicesArray) ||
    getFromLocalStorage("selectedServices");

  const totalPrice = selectedServicesArray.reduce(
    (total, { price }) => total + price,
    0
  );

  return <span>Total Price: {totalPrice} AMD</span>;
};
