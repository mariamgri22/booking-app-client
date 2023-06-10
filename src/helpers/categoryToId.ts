export const categoryToId = (category: string) => {
    return category.toLowerCase().replace(/\s/g, "-");
  };