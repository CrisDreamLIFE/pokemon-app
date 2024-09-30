// components/FilterSidebar.js
import { Checkbox, Spacer } from "@nextui-org/react";

export function TypeSidebar ({ types, selectedTypes, onTypeChange }) {
  // return (
  //   <div style={{ padding: '1rem' }}>
  //     <p h4>Filtrar por Tipo</p>
  //     {types.map((type) => (
  //       <div key={type}>
  //         <Checkbox
  //           checked={selectedTypes.includes(type)}
  //           onChange={() => onTypeChange(type)}
  //         >
  //           {type}
  //         </Checkbox>
  //         <Spacer y={0.5} />
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div>
      <h3>Types</h3>
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
