import {Route, Routes, Navigate, } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import useInactivityTimer from "./components/Main/Logout";
// import ProductUpdate from "./Redux/ProductUpdate";
// import Productpage from "./Redux/Product";
// import { Provider,store } from "./Redux/mockStore";


function App() {
	// const user = localStorage.getItem("token");
	const isAuthenticated = !!localStorage.getItem('token');
useInactivityTimer()


	return (


		<Routes>
			{isAuthenticated && <Route path="/" exact element={<Main />} />}
			<Route path="/signup"   element={isAuthenticated ? <Navigate to="/" /> :<Signup />} />
			<Route 	path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}/>
	
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>



// {/* <Provider store={store}>
// <ProductUpdate/>
// <Productpage/>
// </Provider> */}
			);
}

export default App;
