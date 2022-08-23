import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CardsSection from "./components/Cards/CardsSection";
import PageBody from "./components/PageBody/PageBody";
import banksCode from "./constants/banksCode";

const notify = () => toast.error("Make sure fields are filled correctly");

function App() {
  const [appState, setAppState] = useState(0);
  const [cardDetails, setCardDetails] = useState({
    cardOwner: "",
    cardNumber: "",
    cardExpire: ["", ""],
    cardCVC: "",
    cardLogo: "",
  });

  const handleInputs = {
    changeCardOwner(name) {
      setCardDetails({ ...cardDetails, cardOwner: name });
    },
    changeCardNumber(number) {
      setCardDetails({
        ...cardDetails,
        cardLogo: banksCode[String(number).slice(0, 4)],
      });
      setCardDetails({
        ...cardDetails,
        cardNumber: number
          .replace(/[^\dA-Z]/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim(),
      });
    },
    changeCardExpireMonth(number) {
      setCardDetails({
        ...cardDetails,
        cardExpire: [cardDetails.cardExpire[0], number],
      });
    },
    changeCardExpireYear(number) {
      setCardDetails({
        ...cardDetails,
        cardExpire: [number, cardDetails.cardExpire[1]],
      });
    },
    changeCardCVC(number) {
      setCardDetails({ ...cardDetails, cardCVC: number });
    },
    changeAppState(number) {
      if (number === 0)
        setCardDetails({
          cardOwner: "",
          cardNumber: "",
          cardExpire: ["", ""],
          cardCVC: "",
        });
      setAppState(number);
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] grid-rows-2 md:grid-rows-1 min-h-screen">
        <CardsSection cardDetails={cardDetails} />
        <PageBody
          appState={appState}
          cardDetails={cardDetails}
          handleInputs={handleInputs}
          toast={notify}
        />
      </div>
      <Toaster />
    </>
  );
}

export default App;
