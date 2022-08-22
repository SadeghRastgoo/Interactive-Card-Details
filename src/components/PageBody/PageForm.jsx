import Button from "../Button/Button";

const PageForm = ({ handleInputs, cardDetails }) => {
  return (
    <form className="form-container flex flex-col gap-4 md:max-w-xs text-xs col-start-2 col-span-1">
      <div className="flex flex-col space-y-1">
        <label className="tracking-widest text-[10px] text-[#21092f]">
          CARDHOLDER NAME
        </label>
        <input
          className="p-2 rounded-md border border-gray-300"
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => handleInputs.changeCardOwner(e.target.value)}
          maxLength={20}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label className="tracking-widest text-[10px] text-[#21092f]">
          CARD NUMBER
        </label>
        <input
          className="p-2 rounded-md border border-gray-300"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={cardDetails.cardNumber}
          onChange={(e) => handleInputs.changeCardNumber(e.target.value)}
          maxLength={19}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-1">
          <label className="tracking-widest text-[10px] text-[#21092f]">
            EXP. DATE (MM/YY)
          </label>
          <div className="grid gap-2 grid-cols-2">
            <input
              className="p-2 rounded-md border border-gray-300"
              type="text"
              placeholder="MM"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) =>
                handleInputs.changeCardExpireMonth(e.target.value)
              }
              maxLength={2}
            />
            <input
              className="p-2 rounded-md border border-gray-300"
              type="text"
              placeholder="YY"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) =>
                handleInputs.changeCardExpireYear(e.target.value)
              }
              maxLength={2}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label className="tracking-widest text-[10px] text-[#21092f]">
            CVC
          </label>
          <input
            className="p-2 rounded-md border border-gray-300"
            type="text"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => handleInputs.changeCardCVC(e.target.value)}
            placeholder="e.g. 123"
            maxLength={3}
          />
        </div>
      </div>
      <Button type="submit" onClick={() => handleInputs.changeAppState(1)}>
        Confirm
      </Button>
    </form>
  );
};

export default PageForm;
