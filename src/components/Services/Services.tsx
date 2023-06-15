import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  fetchServices,
  toggleServiceSelectionStore,
} from "../../feature/servicesSlice";
import { useNavigate } from "react-router-dom";
import { categoryToId } from "../../helpers/categoryToId";
import { groupServicesByCategoryHelper } from "../../helpers/groupServicesByCategoryHelper";
import { filterServicesHelper } from "../../helpers/filterServicesHelper";
import { SingleService } from "./SingleService";
import { Service } from "../../types/Service";
import { useSearchParams } from "react-router-dom";
import { NavLinks, ServicesContainer } from "./StyledService";
import search from '../../assets/search.svg'

export const Services: React.FC = () => {
  const { services, count, selectedServices } = useSelector(
    (state: RootState) => state.services
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("keyword") || "";

  const handleSearch = (query: string) => {
    setSearchParams({ keyword: query }, { replace: true });
  };
  const dispatch: AppDispatch = useDispatch();
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
    <ServicesContainer>
      <div className="category-links">
        {Object.keys(groupedServicesByCategory).map((category) => {
          const linkId = categoryToId(category);
          return (
            <NavLinks key={category} to={linkId} smooth={true} duration={500}>
              {category}
            </NavLinks>
          );
        })}
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">
          <img src={search} alt=""/>
        </span>
      </div>
      {Object.entries(groupedServicesByCategory).map(
        ([category, services], index) => (
          <div key={category} ref={categoryRefs.current[index]}>
            <h3 id={categoryToId(category)}>{category}</h3>
            <div>
              {services.map((service: Service) => (
                <SingleService
                  key={service.id}
                  {...service}
                  isServiceSelected={isServiceSelected}
                  toggleServiceSelection={toggleServiceSelection}
                />
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
    </ServicesContainer>
  );
};
