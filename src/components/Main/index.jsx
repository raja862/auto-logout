import { useEffect} from "react";
import styles from "./styles.module.css";
// import axios from "axios";
import { jwtDecode } from "jwt-decode";




const Main = () => {

// const [data]=useContext(myContext)
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
// const [usedata, updata]=useState([])
// console.log(usedata)

useEffect(()=>{

	const token = localStorage.getItem("token"); 
	if (token) {
		setLogoutTimer(token);
	}
},[])

const getTokenExpiration = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken.exp * 1000; 
};



const setLogoutTimer = (token) => {
    const expirationTime = getTokenExpiration(token);
    const timeUntilExpiration = expirationTime - Date.now();

    if (timeUntilExpiration > 0) {
        setTimeout(handleLogout, timeUntilExpiration);
    } else {
        handleLogout();
    }
};




// const URL="https://fascinating-clafoutis-f9d623.netlify.app"
// const getData=async()=>{

// await axios.get(URL).then(res=>updata(res.data)).catch(error=>console.log(error))
// }

// console.log(usedata.name); https://signuplogin-vnuz.onrender.com/one/6673d9dfa3dd3bd0aa3150b5


	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Greatify</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			  <div>
				
				{/* <h1  style={{color:"white", textAlign:"center"}}  ><span style={{color:"greenyellow"}}> Login Person Name:</span>{usedata.name}</h1> */}
				<a href="https://fascinating-clafoutis-f9d623.netlify.app">hello</a>
	
				</div>




		</div>
	);
};

export default Main;



























