import { Services } from "../components/Services/Services";
import { useSearchParams } from "react-router-dom";
import left from "./../assets/left.svg";

export const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("keyword") || "";

  const handleSearch = (query: string) => {
    setSearchParams({ keyword: query }, { replace: true });
  };

  return (
    <div>
      <div>
        <img src={left} alt="" />
        <h3 className="services-title">Services</h3>
      </div>

      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        <Services searchQuery={searchQuery} />
      </div>
    </div>
  );
};
