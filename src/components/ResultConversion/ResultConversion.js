import "./ResultConversion.css"
const units = {
  kmToMiles: { from: 'km', to: 'miles' },
  milesToKm: { from: 'miles', to: 'km' },
  ftToM: { from: 'feet', to: 'meters' },
  mToft: { from: 'meters', to: 'feet' },
  cmToIn: { from: 'cm', to: 'inches' },
  inToCm: { from: 'inches', to: 'cm' }
};

export const ResultConversion = ({ value, conversionType }) => {
  const selectedUnit = units[conversionType];
  return (
      <div className="resultParent">
        <div className="resultNumber">
        {isNaN(value) ? '0.00' : value.toFixed(2)}
        </div>
        <div className="resultType">
        {selectedUnit.to}
        </div>
      </div>
  );
};
