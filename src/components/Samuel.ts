import React, { useEffect, useState } from "react";
import {
	dashboardRoute,
	starterRoute,
	loginRoute,
	rolesSettingRoute,
	addRoleSettingRoute,
	adminsRoute,
	addAdminRoute,
	customersRoute,
	addCustomerRoute,
	apiProvidersRoute,
	addApiProviderRoute,
	categoriesRoute,
	addCategoryRoute,
	productsRoute,
	addProductRoute,
	viewAdminRoute,
	adminRoute,
	customerRoute,
	platformsRoute,
	addPlatformRoute,
	platformRoute,
	permissionsSettingRoute,
	addPermissionSettingRoute,
	permissionSettingRoute,
	reorderPermissionsSettingRoute,
	subReorderPermissionsSettingRoute,
} from "./constant-routes";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import StarterPage from "./pages/starter";
import LoginPage from "./pages/login";
import { actionTypes } from "./reducer-action-types.enum";
import { connect } from "react-redux";
import { Network } from "./Network";
import { NetworkDataResponse, NetworkErrorResponse } from "./network-data-response";
import { login, loadSidebar } from "./app-state-actions";
import { useDispatch } from "react-redux";
import Roles from "./pages/roles";
import AddRole from "./pages/add-role";
import Admins from "./pages/admins";
import AddAdmin from "./pages/add-admin";
import Customers from "./pages/customers";
import AddCustomer from "./pages/add-customer";
import ApiProviders from "./pages/api-providers";
import AddApiProvider from "./pages/add-api-provider";
import Categories from "./pages/categories";
import AddCategory from "./pages/add-category";
import Products from "./pages/products";
import AddProduct from "./pages/add-product";
import ViewAdmin from "./pages/view-admin";
import AdminLayout from "./pages/admin-layout";
import AssignAdminRoles from "./pages/assign-admin-roles";
import CustomerLayout from "./pages/customer-layout";
import ViewCustomer from "./pages/view-customer";
import AssignCustomerRoles from "./pages/assign-customer-roles";
import Platforms from "./pages/platforms";
import AddPlatform from "./pages/add-platform";
import PlatformLayout from "./pages/platform-layout";
import ViewPlatform from "./pages/view-platform";
import Permissions from "./pages/permissions";
import AddPermission from "./pages/add-permission";
import PermissionLayout from "./pages/permission-layout";
import ViewPermission from "./pages/view-permission";
import ReorderPermissions from "./pages/reorder-permission";
import AssignPermissionRoles from "./pages/assign-permission-roles";

function RequireAuth({ props, children }: { props: any; children: JSX.Element }) {
	let location = useLocation();

	if (!props.isAuthenticated) {
		return <Navigate to={loginRoute} state={{ from: location }} replace />;
	}

	return children;
}

function SkipAuth({ props, children }: { props: any; children: JSX.Element }) {
	let location = useLocation();

	if (props.isAuthenticated) {
		return <Navigate to={dashboardRoute} state={{ from: location }} replace />;
	}

	return children;
}

function App(props: any) {
	let dataSchema: {
		fetching: Boolean;
	} = {
		fetching: true,
	};
	let [data, setData] = useState(dataSchema);
	let dispatch = useDispatch();
	let navigate = useNavigate();

	let checkAuth = async () => {
		let response: NetworkErrorResponse | NetworkDataResponse = await new Network().getHttp({ url: "user/profile" });

		if (response instanceof NetworkErrorResponse) {
			setData({ ...data, fetching: false });
		}
		if (response instanceof NetworkDataResponse) {
			dispatch(login({ user: response.data }));
			dispatch(loadSidebar(response.data.permissions));
			setData({ ...data, fetching: false });
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	if (data.fetching) {
		return <React.Fragment></React.Fragment>;
	} else {
		return (
			<Routes>
				<Route
					path={dashboardRoute}
					element={
						<RequireAuth props={props}>
							<Dashboard />
						</RequireAuth>
					}
				></Route>

				<Route
					path={rolesSettingRoute}
					element={
						<RequireAuth props={props}>
							<Roles />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addRoleSettingRoute}
					element={
						<RequireAuth props={props}>
							<AddRole />
						</RequireAuth>
					}
				></Route>

				<Route
					path={adminsRoute}
					element={
						<RequireAuth props={props}>
							<Admins />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addAdminRoute}
					element={
						<RequireAuth props={props}>
							<AddAdmin />
						</RequireAuth>
					}
				></Route>

				<Route
					path={adminRoute}
					element={
						<RequireAuth props={props}>
							<AdminLayout />
						</RequireAuth>
					}
				>
					<Route
						path=":id"
						element={
							<RequireAuth props={props}>
								<ViewAdmin />
							</RequireAuth>
						}
					></Route>
					<Route
						path="assign-roles/:id"
						element={
							<RequireAuth props={props}>
								<AssignAdminRoles />
							</RequireAuth>
						}
					></Route>
				</Route>

				<Route
					path={customersRoute}
					element={
						<RequireAuth props={props}>
							<Customers />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addCustomerRoute}
					element={
						<RequireAuth props={props}>
							<AddCustomer />
						</RequireAuth>
					}
				></Route>

				<Route
					path={customerRoute}
					element={
						<RequireAuth props={props}>
							<CustomerLayout />
						</RequireAuth>
					}
				>
					<Route
						path=":id"
						element={
							<RequireAuth props={props}>
								<ViewCustomer />
							</RequireAuth>
						}
					></Route>
					<Route
						path="assign-roles/:id"
						element={
							<RequireAuth props={props}>
								<AssignCustomerRoles />
							</RequireAuth>
						}
					></Route>
				</Route>

				<Route
					path={apiProvidersRoute}
					element={
						<RequireAuth props={props}>
							<ApiProviders />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addApiProviderRoute}
					element={
						<RequireAuth props={props}>
							<AddApiProvider />
						</RequireAuth>
					}
				></Route>

				<Route
					path={categoriesRoute}
					element={
						<RequireAuth props={props}>
							<Categories />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addCategoryRoute}
					element={
						<RequireAuth props={props}>
							<AddCategory />
						</RequireAuth>
					}
				></Route>

				<Route
					path={productsRoute}
					element={
						<RequireAuth props={props}>
							<Products />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addProductRoute}
					element={
						<RequireAuth props={props}>
							<AddProduct />
						</RequireAuth>
					}
				></Route>

				<Route
					path={platformsRoute}
					element={
						<RequireAuth props={props}>
							<Platforms />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addPlatformRoute}
					element={
						<RequireAuth props={props}>
							<AddPlatform />
						</RequireAuth>
					}
				></Route>

				<Route
					path={platformRoute}
					element={
						<RequireAuth props={props}>
							<PlatformLayout />
						</RequireAuth>
					}
				>
					<Route
						path=":id"
						element={
							<RequireAuth props={props}>
								<ViewPlatform />
							</RequireAuth>
						}
					></Route>
				</Route>

				<Route
					path={permissionsSettingRoute}
					element={
						<RequireAuth props={props}>
							<Permissions />
						</RequireAuth>
					}
				></Route>

				<Route
					path={addPermissionSettingRoute}
					element={
						<RequireAuth props={props}>
							<AddPermission />
						</RequireAuth>
					}
				></Route>

				<Route
					path={permissionSettingRoute}
					element={
						<RequireAuth props={props}>
							<PermissionLayout />
						</RequireAuth>
					}
				>
					<Route
						path=":id"
						element={
							<RequireAuth props={props}>
								<ViewPermission />
							</RequireAuth>
						}
					></Route>
					<Route
						path="assign-roles/:id"
						element={
							<RequireAuth props={props}>
								<AssignPermissionRoles />
							</RequireAuth>
						}
					></Route>
				</Route>

				<Route
					path={reorderPermissionsSettingRoute}
					element={
						<RequireAuth props={props}>
							<ReorderPermissions />
						</RequireAuth>
					}
				></Route>

				<Route
					path={subReorderPermissionsSettingRoute}
					element={
						<RequireAuth props={props}>
							<ReorderPermissions />
						</RequireAuth>
					}
				></Route>

				<Route
					path={starterRoute}
					element={
						<RequireAuth props={props}>
							<StarterPage />
						</RequireAuth>
					}
				></Route>

				<Route
					path={loginRoute}
					element={
						<SkipAuth props={props}>
							<LoginPage />
						</SkipAuth>
					}
				></Route>
			</Routes>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { ...state };
};

export default connect(mapStateToProps)(App);