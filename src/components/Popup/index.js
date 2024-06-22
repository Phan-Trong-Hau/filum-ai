const Popup = ({ children, backgroundWhite = false, ...props }) => {
  return (
    <div className="popup-wrapper" {...props}>
      <div
        className={
          backgroundWhite
            ? "popup-container background-white"
            : "popup-container"
        }
      >
        {children}
      </div>
    </div>
  );
};
export default Popup;
