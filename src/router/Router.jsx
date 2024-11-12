import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { ROUTES } from "../routes/Routes";
import AboutUs from "../components/AboutUs";
import Error from "../components/Error";
import Skills from "../components/Skills";
import Project from "../components/Project";
const router = createBrowserRouter([
	{
		path: `${ROUTES.HOME}`,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: `${ROUTES.HOME}`,
				element: <HomePage />,
			},
			{
				path: `${ROUTES.SKILLS}`,
				element: <Skills />,
			},
			{
				path: `${ROUTES.PROJECTS}`,
				element: <Project />,
			},
            {
				path: `${ROUTES.ABOUT}`,
				element: <AboutUs />,
			},
		],
	},
]);

export default router;
