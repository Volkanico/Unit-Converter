import "./InputFieldConversion.css"
export const InputFieldConversion = ({ value, onChange, unit }) => {
  let unitLabel = '';
  switch (unit) {
    case 'kmToMiles':
      unitLabel = 'km';
      break;
    case 'milesToKm':
      unitLabel = 'miles';
      break;
    case 'ftToM':
      unitLabel = 'feet';
      break;
    case 'mToft':
      unitLabel = 'meters';
      break;
    case 'cmToIn':
      unitLabel = 'cm';
      break;
    case 'inToCm':
      unitLabel = 'inches';
      break;
    default:
      break;
  }

  return (
    <div className="inputfield">
      <input className="custom-select" type="number" value={value} onChange={onChange} />
      <span className="unitlabel">{unitLabel}</span>
    </div>
  );
};
