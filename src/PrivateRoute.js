import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	Route,
} from "react-router-dom";

const PrivateRoute = ({ children, loginStatus, ...rest }) => {

	let location = useLocation();



	return (
		<Route
			{...rest}
			render={({ location }) =>
			(

				<main >
					{children}
				</main>
			)
			}
		/>

	);
}
export default PrivateRoute;