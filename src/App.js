import { useState } from "react";
import CardsSection from "./components/Cards/CardsSection";
import PageBody from "./components/PageBody/PageBody";

function App() {
  const [appState, setAppState] = useState(0)
  const [cardDetails, setCardDetails] = useState({
    cardOwner: "",
    cardNumber: "",
    cardExpire: ['', ''],
    cardCVC: ''
  })

  const handleInputs = {
    changeCardOwner(name) {
      setCardDetails({...cardDetails, cardOwner: name})
    },
    changeCardNumber(number) {
      setCardDetails({...cardDetails, cardNumber: number.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()})
    },
    changeCardExpireMonth(number) {
      setCardDetails({...cardDetails, cardExpire: [cardDetails.cardExpire[0], number]})
    },
    changeCardExpireYear(number) {
      setCardDetails({...cardDetails, cardExpire: [number, cardDetails.cardExpire[1]]})
    },
    changeCardCVC(number) {
      setCardDetails({...cardDetails, cardCVC: number})
    },
    changeAppState(number) {
      if (number === 0) setCardDetails({
        cardOwner: "",
        cardNumber: "",
        cardExpire: ['', ''],
        cardCVC: ''
      })
      setAppState(number)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] grid-rows-2 min-h-screen">
      <CardsSection cardDetails={cardDetails} />
      <PageBody appState={appState} cardDetails={cardDetails} handleInputs={handleInputs} />
    </div>
  );
}

export default App;