'use client';

const FilterPanel = ({ onFilter, filters }) => {
  return (
    <div className="flex space-x-4 mt-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilter(filter)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterPanel;
