import CompleteState from "./CompleteState";
import PageForm from "./PageForm";

const PageBody = ({ handleInputs, cardDetails, appState }) => {
  return (
    <section className="px-5 py-5 md:pt-24 md:p-10 md:grid md:items-center md:justify-center md:grid-cols-[minmax(10vw,250px)_1fr_auto]">
      {appState === 1 ? (
        <CompleteState handleInputs={handleInputs} />
      ) : (
        <PageForm handleInputs={handleInputs} cardDetails={cardDetails} />
      )}
    </section>
  );
};

export default PageBody;
