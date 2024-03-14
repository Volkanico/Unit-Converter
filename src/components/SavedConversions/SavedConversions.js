import "./SavedConversions.css";

export const SavedConversions = ({ savedConversions, onDeleteClick }) => {
  return (
    <div className="saved-conversions-container">
      <h2>Saved</h2>
      <div className="saved-conversions">
        {savedConversions.map((conversion, index) => (
          <div className="saved-conversion-item" key={index}>
            {conversion.formatted}
            <button onClick={() => onDeleteClick(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};
