import React from "react";
import { useLocation,  Navigate} from "react-router-dom";


export const RequireAuth = ({ props, children }) => {
	let location = useLocation();

	if (!props.isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export const SkipAuth = ({ props, children }) => {
	let location = useLocation();

	if (props.isAuthenticated) {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}
	return children;
}
