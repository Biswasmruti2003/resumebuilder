
import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Analytics from "./components/Analytics";

export default function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: [""],
    summary: ""
  });

  return (
    <div className="container-fluid py-5">
      <div className="row p-1 p-md-5">
        <div className="col-md-4">
          <Form data={data} setData={setData} />
          <Analytics data={data} />
        </div>
        <Preview data={data} />
      </div>
    </div>
  );
}