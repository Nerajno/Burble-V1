import React from "react";

import {Route, Switch} from "react-router-dom";

import Home from "../components/pages/Home";
import Catalog from "../components/pages/Catalog";
import Detail from "../components/pages/detail/Detail";
import NotFound from "../components/pages/NotFoundPage";

const Routes = () => {
	return (
		<Switch>
			<Route path="/:category/search/:keyword" exact component={Catalog} />
			<Route path="/:category/:id" exact component={Detail} />
			<Route path="/:category" exact component={Catalog} />
			<Route path="/" exact component={Home} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
};

export default Routes;
