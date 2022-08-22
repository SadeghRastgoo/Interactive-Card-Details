const Button = ({ type, children, extendClass, onClick }) => {
  return (
    <button
      type={type}
      className={`rounded-md bg-[#220a30] w-full hover:bg-[#3b1352] transition-colors duration-300 text-white p-2.5 text-sm cursor-pointer mt-2 ${extendClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
