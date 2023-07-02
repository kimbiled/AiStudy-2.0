import { Outlet } from "react-router-dom";
import styles from "../style";
import { Footer, Navbar } from "../components";
import Subscribe from "../components/Subscribe";
const Layout = () => {
	return (
		<>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<Outlet />

			<Subscribe></Subscribe>
			<Footer></Footer>
		</>
	);
};

export default Layout;
