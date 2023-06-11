import React, { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  fetchServices,
  Service,

  toggleServiceSelectionStore,
} from "../../feature/servicesSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { categoryToId } from "../../helpers/categoryToId";
import { groupServicesByCategoryHelper } from "../../helpers/groupServicesByCategoryHelper";
import { filterServicesHelper } from "../../helpers/filterServicesHelper";

interface ServicesProps {
  searchQuery: string;
}

export const Services: React.FC<ServicesProps> = ({ searchQuery }) => {
  const { services, count, selectedServices } = useSelector(
    (state: RootState) => state.services
  );


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleNavigateCheckout = () => {
    navigate("/booking");
  };

  const toggleServiceSelection = (serviceId: number) => {
    dispatch(toggleServiceSelectionStore(serviceId));
  };

  const isServiceSelected = (serviceId: number) => {
    return selectedServices.includes(serviceId);
  };

  const filteredServices = useMemo(() => {
    return filterServicesHelper(services, searchQuery);
  }, [services, searchQuery]);

  const groupedServicesByCategory = useMemo(() => {
    return groupServicesByCategoryHelper(filteredServices);
  }, [filteredServices]);

  useEffect(() => {
    categoryRefs.current = Object.keys(groupedServicesByCategory).map(() =>
      React.createRef<HTMLDivElement>()
    );
  }, [groupedServicesByCategory]);

  return (
    <div className="services-container">
      <div className="category-links">
        {Object.keys(groupedServicesByCategory).map((category) => (
          <Link
            key={category}
            to={categoryToId(category)}
            smooth={true}
            duration={500}
          >
            {category}
          </Link>
        ))}
      </div>
      {Object.entries(groupedServicesByCategory).map(
        ([category, services], index) => (
          <div key={category} ref={categoryRefs.current[index]}>
            <h1 id={categoryToId(category)}>{category}</h1>
            <div>
              {services.map((service: Service) => (
                <div
                  key={service.id}
                  className={`service-item ${
                    isServiceSelected(service.id) ? "selected" : ""
                  }`}
                  onClick={() => toggleServiceSelection(service.id)}
                >
                  <div className="service-info">
                    <div className="service-description">
                      Description: {service.description}
                    </div>
                    <div className="service-duration">
                      Duration: {service.duration} hour(s)
                    </div>
                    <div className="service-price">Price: ${service.price}</div>
                  </div>
                  <button className="service-toggle">
                    {isServiceSelected(service.id) ? "-" : "+"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      {selectedServices.length > 0 && (
        <div className="selected-service">
          <button onClick={handleNavigateCheckout}>Continue {count}</button>
        </div>
      )}
    </div>
  );
};
