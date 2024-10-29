import React, { useEffect, useState } from "react";

function Index() {
  const [data, setData] = useState<string>("heheheh");
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
        setArrayData(data.people);
      });
  }, []);

  return (
    <div>
      <div className="bg-blue-200 h-10 text-center">{data}</div>
      <div className="bg-blue-400 h-10 text-center">
        <label>Peoples</label>
        <ul>
          {arrayData.map((people, index) => (
            <li key={index}>{people}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;
