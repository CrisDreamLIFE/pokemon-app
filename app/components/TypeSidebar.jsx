// components/FilterSidebar.js
import { Checkbox, Spacer } from "@nextui-org/react";

export function TypeSidebar ({ types, selectedTypes, onTypeChange }) {
  return (
    <div style={{ padding: '1rem' }}>
      <Text h4>Filtrar por Tipo</Text>
      {types.map((type) => (
        <div key={type}>
          <Checkbox
            checked={selectedTypes.includes(type)}
            onChange={() => onTypeChange(type)}
          >
            {type}
          </Checkbox>
          <Spacer y={0.5} />
        </div>
      ))}
    </div>
  );
};
