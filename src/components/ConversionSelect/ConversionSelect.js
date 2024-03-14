import "./ConversionSelect.css"
export const ConversionSelect = ({ value, onChange }) => {
    return (
        <select value={value} onChange={onChange} className="custom-select">
            <option value="kmToMiles">km → miles</option>
            <option value="milesToKm">miles → km</option>
            <option value="ftToM">feet → meters</option>
            <option value="mToft">meters → feet</option>
            <option value="cmToIn">cm → inches</option>
            <option value="inToCm">inches → cm</option>
        </select>
    );
}
