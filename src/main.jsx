import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout/Layout/Layout';
import Active from './pages/Active/Active';
import All from './pages/All/All';
import Completed from './pages/Completed/Completed';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <All />,
			},
			{
				path: '/active',
				element: <Active />,
			},
			{
				path: '/completed',
				element: <Completed />,
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
