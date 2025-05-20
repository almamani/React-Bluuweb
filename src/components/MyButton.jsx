const MyButton = ({ text }) => {
  const handleClick = () => {
    console.log(`Hizo click en el botón: ${text}`);
  };
  return (
    <button className="space_inferior1" onClick={handleClick}>
      {text}
    </button>
  );
};

export default MyButton;
