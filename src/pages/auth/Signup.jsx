import { useState } from "react";
import { signupService } from "../../services/auth.services";
import { useNavigate } from "react-router-dom"

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    // ... signup logic here
    const user = {
        username,
        email,
        password
    }

    try {
        await signupService(user)
        console.log("todo bien")
    } catch (error) {
        //navigate
        //console.log(error)
        console.log(error.response.data.errorMessage)
        console.log(error.response.status)
        if(error.response.status === 400) setErrorMessage(error.response.data.errorMessage)
        else {
            navigate("/error")
        }
    }
  };

  return (
    <div>

      <h1>Sign Up</h1>

      <form onSubmit={handleSignup}>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" value={username} onChange={handleUsernameChange}/>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange}/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange}/>
      </div>
      <button type="submit" class="btn btn-primary">Sign up</button>
    </form>

     
      
    </div>
  );
  return (
    <form onSubmit={handleSignup}>
    <label>Name:</label>
    <input
      type="text"
      name="username"
      value={username}
      onChange={handleUsernameChange}
    />

    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={email}
      onChange={handleEmailChange}
    />

    <label>Password:</label>
    <input
      type="password"
      name="password"
      value={password}
      onChange={handlePasswordChange}
    />
    {errorMessage !== null && <p>{errorMessage}</p>}
    <button type="submit">Signup</button>
  </form>
  )
}

export default Signup;