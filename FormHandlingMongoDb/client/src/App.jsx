import axios from "axios";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormData =async ()=>{
    try {
     const response = await axios.post("/api/register",formData)
     console.log(response.data);
    } catch (error) {
      console.log('Some error Ocurred while Form Submission',error.message);
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-[50%] h-[90vh] border bg-slate-700 flex flex-col justify-center m-auto my-10 items-center">
        <h2 className="text-3xl">Enter Your Details</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Your Name"
          className="bg-inherit border w-[400px] h-[50px] text-white my-10 text-2xl"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Your Email"
          className="bg-inherit border w-[400px] h-[50px] text-white my-10 text-2xl"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter Your Password"
          className="bg-inherit border w-[400px] h-[50px] text-white my-10 text-2xl"
          onChange={handleChange}
        />
        <button
          type="button"
          className="border p-[6px] bg-blue-600 text-white"
          onClick={handleFormData}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
