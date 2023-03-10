import { HashRouter,Routes, Route } from 'react-router-dom';
import 'styles/global.css'
import Layout from 'containers/Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import RecoveryPassword from 'pages/RecoveryPassword';
import SendEmail from 'pages/SendEmail';
import NewPassword from 'pages/NewPassword';
import MyAccound from 'pages/MyAccound';
import CreateAccount from 'pages/CreateAccound';
import Checkout from 'pages/Checkout';
import Orders from 'pages/Orders';
import AppContext from 'context/AppContext';
import useInitialState from 'hooks/useInitialState';

function App() {
	const initialState = useInitialState();
        return (
			<AppContext.Provider value={initialState}>
				<HashRouter basename="/react-shop">
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/recovery-password" element={<RecoveryPassword />} />
							<Route path="/send-email" element={<SendEmail />} />
							<Route path="/new-password" element={<NewPassword />} />
							<Route path="/accound" element={<MyAccound />} />
							<Route path="/signup" element={<CreateAccount />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/orders" element={<Orders />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Layout>
				</HashRouter>
			</AppContext.Provider>
        )
}
export { App };