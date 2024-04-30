function AirportList({ airline }) {
  return (
    <>
      <ul>
        <li key={airline}>{airline}</li>
      </ul>
    </>
  );
}

export default AirportList;
