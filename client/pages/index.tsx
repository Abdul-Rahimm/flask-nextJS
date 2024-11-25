import React, { useEffect, useState } from "react";

function Index() {
  const [data, setData] = useState<string>("heheheh");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }, []);

  return <div>{data}</div>;
}

export default Index;
