const CardFront = ({ cardExpire, cardNumber, cardOwner, cardBankLogo }) => {
  return (
    <div className="px-5 pt-6 md:p-0">
      <div className="w-full max-w-[350px] absolute md:relative md:bottom-[unset] -bottom-12 md:max-w-sm mr-auto">
        <img
          className="w-full h-full rounded-lg shadow-lg"
          src="images/bg-card-front.png"
          alt="Credit Card Back"
        />
        <img
          className={cardBankLogo ? "" : "absolute top-6 left-6 scale-90"}
          src={cardBankLogo}
          alt=""
        />
        <p className="absolute bottom-14 left-1/2 -translate-x-1/2 w-10/12 text-white text-lg font-bold text-center tracking-[4.7px] z-10">
          {cardNumber || "0000 0000 0000 0000"}
        </p>
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10/12 text-white text-xs text-left tracking-[2px] z-10 uppercase">
          {cardOwner || "Card Holder Name"}
        </p>
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10/12 text-white text-xs text-right tracking-[2px] z-10 uppercase">
          {cardExpire[1] || "00"}/{cardExpire[0] || "00"}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
