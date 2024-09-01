import { useEffect } from "react";
import { colors } from "../../utils/constants";
import { FilterProps } from "./size";
import { useSearchParams } from "react-router-dom";

const Color = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  // Update URL parameters when selected colors change
  useEffect(() => {
    if (selected.length > 0) {
      // Join selected colors with comma and add to URL
      params.set("color", selected.join(","));
    } else {
      // Remove color parameter if no colors are selected
      params.delete("color");
    }
    setParams(params);
  }, [selected, params, setParams]);

  // Toggle color in the selected array
  const toggle = (color: string) => {
    setSelected((prevSelected) => {
      const isSelected = prevSelected.includes(color);
      if (isSelected) {
        return prevSelected.filter((item) => item !== color);
      } else {
        return [...prevSelected, color];
      }
    });
  };

  return (
    <div>
      <h2 className="mb-4">Renkler</h2>

      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {
          const isSelected = selected.includes(color.id);

          return (
            <div
              key={color.id} // Added key for better performance
              onClick={() => toggle(color.id)}
              style={{ background: color.code }}
              className={`py-2 px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 text-transparent select-none ${
                isSelected ? "ring-4 ring-blue-500" : "" // Added color to ring
              }`}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
