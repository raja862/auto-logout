import { useState } from "react";
import axios from "axios";
// import { useContext } from "react";
// import { myContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Signup = () => {

	// const [data, setData] = useContext(myContext)


	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});







console.log(data.name)

const [eye,seteye]=useState(false)

const eyePassword=()=>{
	seteye(!eye)
}

	console.log(data)
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChanges = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmits= async (e) => {
		e.preventDefault();
		try {
			const url = "https://signuplogin-vnuz.onrender.com/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		<div>
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<img src="https://heycampus.io/School/asset/Login%20Image@2x.png" alt="" />
					
					{/* <Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button >
					</Link> */}
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmits}>
						<h3>Create <span style={{color:"rgb(0,220,70)"}}>G</span>reatify Account</h3>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChanges}
							value={data.name}
							required
							className={styles.input}
						
						/>
						{error.name && <small>{error.name}</small>}
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChanges}
							value={data.email}
							required
							
							className={styles.input}
						/>
						{error.email && <small>{error.email}</small>}

						<div style={{position:"relative"}}>
						<input
							type={eye?"text":"password"}
							placeholder="Password"
							name="password"
							onChange={handleChanges}
							value={data.password}
							required
							className={styles.input}
						/>
						 <i id="eyei" onClick={eyePassword} style={{position:"absolute", right:'14px', top:"16px"}}  class={eye?"bi bi-eye-fill":"bi bi-eye-slash-fill" } i/>
								{error.password && <small>{error.password}</small>}
								</div>
								<div style={{position:'relative'}}>
						<input
							type={eye?"text":"password"}
							placeholder="confirmPassword"
							name="confirmPassword"
							onChange={handleChanges}
							value={data.confirmPassword}
							required
							className={styles.input}
						/>   
						<i id="eyei" onClick={eyePassword} style={{position:"absolute" , right:"14px",top:'16px'}} class={eye?"bi bi-eye-fill":"bi bi-eye-slash-fill" } i/>
						{/* {errors.confromPassword && <small>{errors.confromPassword}</small>}                     */}
						{error && <div className={styles.error_msg}>{error}</div>}
						</div>
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
							
					<Link to="/login">
						{/* <button type="button" className={styles.white_btn}>
							Sign in
						</button > */}


<button class="cta">
  <span>Signin</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
					</Link>
					</form>
				</div>
			</div>
		</div>
		
		</div>
	);
};

export default Signup;
