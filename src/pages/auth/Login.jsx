import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";

import {AuthContext} from '../../context/auth.context'

function Login() {

  const { authenticateUser } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... login logic here
    const user = {
        email,
        password
    }

    try {
        const response = await loginService(user)
        //console.log("usuario validado", response.data)
        //guardamos el token en localStorage
        localStorage.setItem("authToken", response.data.authToken)
        authenticateUser()

        //asignar los valores a los estados globales para manejo en el FE, con un context
        navigate('/')

    } catch (error) {
        if(error.response.status === 400 || error.response.status === 401){
            setErrorMessage(error.response.data.errorMessage)
        } else {
            navigate("/error")
        }
    }
  };

  return (
    <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem;"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem;"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleLogin}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                    {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" name='email' value={email} onChange={handleEmailChange}/>
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" name="password" value={password} onChange={handlePasswordChange}/>
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button submit">Login</button>
                  </div>

                  {errorMessage !== null && <p>{errorMessage}</p>}
                  

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Don't have an account? <NavLink to={'/signup'}>Register here</NavLink> 
                    {/* <a href="#!"style={{color: "#393f81;"}}>Register here</a> */}
                      </p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )


  return (
    <div>

      <h1>Log In</h1>

      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
}

export default Login;