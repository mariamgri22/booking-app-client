// import { useSelector } from "react-redux";
// import {
//   selectSelectedDay,
//   selectSelectedHour,
// } from "../../feature/calendarSlice";
// import { RootState } from "../../store";

// export const Booking = () => {
//   const selectedDay = useSelector(selectSelectedDay);
//   const selectedHour = useSelector(selectSelectedHour);
//   const { services } = useSelector((state: RootState) => state.services);
//   console.log("🚀 ~ file: Booking.tsx:12 ~ Booking ~ services:", services);
//   const selectedServices = useSelector(
//     (state: RootState) => state.services.selectedServices
//   );
//   console.log(
//     "🚀 ~ file: Booking.tsx:16 ~ Booking ~ selectedServices:",
//     selectedServices
//   );

//   const selectedData = services.filter((service) =>
//     selectedServices.includes(service.id)
//   );

//   return (
//     <div>
//       <span>{selectedDay}</span>
//       <span>{selectedHour}</span>

//       {selectedData.map((service) => (
//         <div key={service.id}>
//           <span>{service.description}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBookingById,
  selectBookingData,
  selectBookingLoading,
  selectBookingError,
} from "../../feature/bookingSlice";
import { RootState } from "../../store";
import { nanoid } from "@reduxjs/toolkit";

export const Booking = () => {
  const selectedServices = useSelector(
    (state: RootState) => state.services.selectedServices
  );

  const dispatch = useDispatch();
  const bookingData = useSelector(selectBookingData);
  const loading = useSelector(selectBookingLoading);
  const error = useSelector(selectBookingError);

  useEffect(() => {
    selectedServices.forEach((serviceId) => {
      dispatch(fetchBookingById(serviceId));
    });
    console.log(
      "🚀 ~ file: Booking.tsx:56 ~ Booking ~ bookingData:",
      bookingData
    );
  }, [dispatch, selectedServices]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>

      {bookingData.map((data) => (
        <div key={nanoid()} >
          <span>Booking Description: {data.description}</span>
          //here
        </div>
      ))}
    </div>
  );
};
