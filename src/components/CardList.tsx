import { FC } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface listProps {
  id: number;
  title: string;
  address?: string;
  price?: any;
  rating?: number;
  description?: string;
  image?: string;
}

const Card: FC<listProps> = ({
  id,
  title,
  price,
  description,
  image,
  rating,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/homestays/${id}`);
  }
  return (
    <div
      className="card card-side cursor-pointer bg-slate-100"
      onClick={onClickDetail}
    >
      <figure>
        <img src={image} alt="Hotel Room" />
      </figure>
      <div className="card-body px-2 py-4">
        <div className="card-title font-semibold text-[#291334] text-4xl md:text-md  mb-2">
          {title}
        </div>
        <p className="font-semibold text-[#291334] text-xl mb-2">
          {description}
        </p>
        <p className="flex items-center">
          <AiTwotoneStar className="text-[#291334]" /> {rating}
        </p>
        <p className="font-bold text-[#291334] text-2xl mb-2">{price}</p>
      </div>
    </div>
  );
};

export default Card;
