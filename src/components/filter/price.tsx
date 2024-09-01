import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Price = ({ value, setValue }: Props) => {
  const [params, setParams] = useSearchParams();
  // performans için debounce uyguladık
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (+debouncedValue > 0) {
      params.set("price", debouncedValue);
    } else {
      params.delete("price");
    }

    setParams(params);
  }, [debouncedValue]);

  return (
    <div>
      <h2 className="mb-4">Fiyat</h2>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="range"
        className="w-full"
        min={0}
        max={1000}
      />

      <div className="flex justify-between font-open font-semibold">
        <span>${value}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;