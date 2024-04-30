import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirportList from '../AirportList/AirportList';

function AirportForm() {
  const airlines = useSelector((store) => store.airlines);

  const dispatch = useDispatch();
  const [airlineInput, setAirlineInput] = useState('');

  const addAirline = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_AIRLINE',
      payload: airlineInput,
    });
  };

  return (
    <>
      <input
        value={airlineInput}
        placeholder="Airline Name"
        type="text"
        onChange={(e) => setAirlineInput(e.target.value)}
      />
      <button onClick={addAirline}>Add Airline</button>

      <thead>
        <th>Airplane Names</th>
      </thead>
      {airlines.map((airline) => {
        return <AirportList airline={airline} />;
      })}
    </>
  );
}

export default AirportForm;
