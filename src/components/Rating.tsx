import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  rating: number;
  handleRating: (i:number) => any;
}

const Rating = ({ rating, handleRating }: Props) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span onClick={() => handleRating(i)} className="cursor-pointer" key={i}>
            {rating > i ? (
              <AiFillStar fontSize={"15px"} color={"#E6AE49"}/>
            ) : (
              <AiOutlineStar fontSize={"15px"} />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
