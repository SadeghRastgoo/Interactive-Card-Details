import Button from "../Button/Button";

const CompleteState = ({ handleInputs }) => {
  return (
    <div className="flex gap-3 flex-col items-center md:max-w-xs text-xs col-start-2 col-span-1">
      <img className="w-16" src="images/icon-complete.svg" alt="" />
      <h3 className="uppercase mt-6 text-xl text-[#21092f]">Thank You!</h3>
      <p className="text-[#8e8593] font-medium text-sm">
        We've added your card details
      </p>
      <Button
        type="button"
        extendClass="mt-6 max-w-xs"
        onClick={() => handleInputs.changeAppState(0)}
      >
        Continue
      </Button>
    </div>
  );
};

export default CompleteState;
