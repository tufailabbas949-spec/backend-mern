import { useState } from "react";
import axios from "axios";
import { useNavigate,Outlet } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    //  const formdata = new  FormData(e.target)
    try {
      const res = await axios.post("http://localhost:3030/create",{
        "name":name,
        "password":password
      })
        navigate("/create/welcome")
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
      <input className="border-black border-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input className="border-black border-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button  className=' bg-blue-500 w-50 p-2'type="submit">Create User</button>
    </form>
      <Outlet />
   </>
  );
}

export default Create;