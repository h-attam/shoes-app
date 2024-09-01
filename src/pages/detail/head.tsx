import Badge from "../../components/card/badge";
import { Shoe } from "../../types";
import calcDiscount from "../../utils/calcDiscount";

const Head = ({ data }: { data: Shoe }) => {
  const lastPrice = calcDiscount(data.price, data.discount);

  return (
    <div>
      <Badge discount={data.discount} />

      <h1 className="text-3xl mt-[60px]">{data.name}</h1>

      <p className="text-[24px] mt-4">
        <span className="text-blue">${lastPrice}</span>

        {data.discount && (
          <span className="line-through ps-3">${data.price}</span>
        )}
      </p>
    </div>
  );
};

export default Head;