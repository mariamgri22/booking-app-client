import { Services } from "../components/Services/Services";
import { useSearchParams } from "react-router-dom";

export const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("keyword") || "";

  const handleSearch = (query: string) => {
    setSearchParams({ keyword: query }, { replace: true });
  };


  return (
    <div>
      <h1 className="services-title">Services</h1>
  
      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div >
        <Services searchQuery={searchQuery} />
      </div>
    </div>
  );
};

