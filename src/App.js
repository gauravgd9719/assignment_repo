
function EditableColumn(props) {
  const handleInputChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <input type="text" value={props.value} onChange={handleInputChange} />
  );
}

function App() {
  const data = [
    { name: 'ZOOM', age: 25, city: 'HIMACHAL' },
    { name: 'VISHWAS', age: 30, city: 'PUNJAB' },
    { name: 'DHIMAN', age: 35, city: 'KERELA' },
    { name: 'GAURAV', age: 35, city: 'MAHARASTRA' },
    { name: 'SACHIN', age: 35, city: 'PARIS' }
  ];

  const handleDataChange = (index, field, value) => {
    // Update the data object when a column value is changed
    data[index][field] = value;
  };

  const handleSave = () => {
    // Here you can perform the API request to save the data
    console.log('Data to be sent:', data);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <EditableColumn
                  value={row.name}
                  onChange={(value) => handleDataChange(index, 'name', value)}
                />
              </td>
              <td>
                <EditableColumn
                  value={row.age}
                  onChange={(value) => handleDataChange(index, 'age', value)}
                />
              </td>
              <td>
                <EditableColumn
                  value={row.city}
                  onChange={(value) => handleDataChange(index, 'city', value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
