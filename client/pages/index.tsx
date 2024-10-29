import React, { useEffect, useState } from "react";

function Index() {
  const [data, setData] = useState<string>("heheheh");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return <div className="bg-blue-200 h-10 text-center">{data}</div>;
}

export default Index;
