const Popup = ({ children, ...props }) => {
  return (
    <div className="popup-wrapper" {...props}>
      <div className="popup-container">{children}</div>
    </div>
  );
};
export default Popup;
