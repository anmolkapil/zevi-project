import { useState } from 'react';

// Custom hook for handling filters
const useFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleCheckboxChange = (filter: string) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters.includes(filter)) {
        return prevSelectedFilters.filter((item) => item !== filter);
      } else {
        return [...prevSelectedFilters, filter];
      }
    });
  };

  return { selectedFilters, handleCheckboxChange };
};

export default useFilter;
