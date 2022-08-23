import CardBack from "./CardBack";
import CardFront from "./CardFront";

const CardsSection = ({ cardDetails }) => {
  return (
    <section className="relative min-h-[230px] max-h-[300px] md:max-h-[unset] md:min-h-screen bg-mobile-bg md:bg-desktop-bg bg-center bg-cover">
      <div className="md:absolute md:flex flex-col-reverse md:top-1/2 md:-translate-y-1/2 md:-right-44 md:w-[475px] gap-8">
        <CardBack cardCVC={cardDetails.cardCVC} />
        <CardFront
          cardNumber={cardDetails.cardNumber}
          cardOwner={cardDetails.cardOwner}
          cardExpire={cardDetails.cardExpire}
          cardBankLogo={cardDetails.cardBankLogo}
        />
      </div>
    </section>
  );
};

export default CardsSection;
