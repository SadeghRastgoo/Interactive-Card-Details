const CardBack = ({ cardCVC }) => {
  return (
    <div className="px-5 py-10 md:p-0">
      <div className="relative w-full max-w-[350px] md:max-w-sm ml-auto">
        <img
          className="w-full h-full rounded-lg shadow-lg"
          src="images/bg-card-back.png"
          alt="Credit Card Back"
        />
        <p className="absolute text-sm top-[5.27rem] md:top-[5.8rem] text-white right-12">
          {cardCVC || "000"}
        </p>
      </div>
    </div>
  );
};

export default CardBack;
