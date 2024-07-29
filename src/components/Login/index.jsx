import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const navigate=useNavigate()
	const [error, setError] = useState("");
	const [eye, seteye] = useState(false)
	const [loading, setLoading] = useState(false)
	const handleEye = () => {
		seteye(!eye)
	}


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		

		try {
			setLoading(true)
			const url = "https://signuplogin-vnuz.onrender.com/login";
			const { data: res } = await axios.post(url, data);
			 localStorage.setItem("token", res.data);
			console.log(res.data)
			setLoading(false)
			window.location = "/";
		
				if(localStorage.getItem("token")){
				  navigate("/");
				}else{
				  navigate("/login");
				}
			
		


	// const response = await fetch('https://signuplogin-vnuz.onrender.com/login', {
	//   method: 'POST',
	//   headers: { 'Content-Type': 'application/json' },
	//   body: JSON.stringify({ username, password })
	// });
	// const data = await response.json();
	// if (data.success) {
	//   document.cookie = `token=${data.token}; HttpOnly`;
	
	// } else {
	//   alert('Login failed');
	// }
  
  



		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};



	

	return (
		
		<div className="loader">


			<div className={styles.login_container}>


				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h3 >Login <span style={{ color: "rgb(0,220,70)" }}>G</span>reatify</h3>
							<p> Entering your registered <span style={{ color: "rgb(0,220,70)" }}>user ID and Password</span></p>



							<input
								type="email"
								placeholder="User ID"
								name="email"
								onChange={handleChange}
								value={data.email}
								className={styles.input}
							/>

						
							<div className="eyediv" style={{ position: 'relative' }}>
								<input
									type={eye ? "text" : "password"}
									placeholder="Password"
									name="password"
									onChange={handleChange}
									value={data.password}

									className={styles.input}
								/>
								<i id="eyei" onClick={handleEye} style={{ position: 'absolute', top: '15px', right: '15px' }} class={eye ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"} i />
							</div>
						
							{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
								{loading ?" please wait loading....":"Sign In" }
							</button>

					


<Link to="/signup">
<button class="cta">
  <span>Signup</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

</Link>





						</form>
					</div>
					<div className={styles.right}>
						<div className="letter">
							{/* <img className="greatimg" src="https://heycampus.io/School/asset/new-Logo.svg" alt="" /> */}
							{/* <h1 className="h21">The <span style={{color:"rgb(0,220,70)"}}>ultimate solution </span>
     to Institutional greatness.</h1> */}
						</div>
						<img src="https://heycampus.io/School/asset/Login%20Image@2x.png" alt="" />

					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
