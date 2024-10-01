// components/FilterSidebar.js
import { Checkbox, Spacer } from "@nextui-org/react";

export function TypeSidebar ({ types, selectedTypes, onTypeChange }) {
  return (
    <div>
      <p className="text-lg font-bold text-center mb-7 mt-8">Types</p>
      <div className="flex flex-col gap-2">
        {types.map((type) => (
          <Checkbox
            key={type}
            isSelected={selectedTypes.includes(type)}
            onChange={() => onTypeChange(type)}
          >
            {type}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};
