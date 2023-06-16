import React from "react";
import { NavLinks } from "./StyledService";

interface CategoryProps {
  groupedServicesByCategory: Record<string, unknown>;
  categoryToId: (category: string) => string;
}

const Category: React.FC<CategoryProps> = ({
  groupedServicesByCategory,
  categoryToId,
}) => {
  return (
    <>
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
    </>
  );
};

export default Category;
