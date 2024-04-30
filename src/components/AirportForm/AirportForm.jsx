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
    <div>
      <input
        value={airlineInput}
        placeholder="Airline Name"
        type="text"
        onChange={(e) => setAirlineInput(e.target.value)}
      />
      <button onClick={addAirline}>Add Airline</button>

      <h2>Airplane Names</h2>

      {airlines.map((airline) => {
        return (
          <>
            <AirportList airline={airline} />
          </>
        );
      })}
    </div>
  );
}

export default AirportForm;
