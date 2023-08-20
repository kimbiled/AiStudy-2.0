import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../assets/icons/index.ts";
import { Link } from "react-router-dom";
import { useUser } from "../context/user/useUser.tsx";

const Navbar = () => {
	const { user } = useUser();
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<Link to={"/"}>
				<img src={logo} alt="hoobank" className="w-[164px] h-[32px]" />
			</Link>
			<ul className="list-none sm:flex hidden justify-center items-center ">
				{navLinks.map((nav, index) => {
					if (nav.id === "login" && user) return;
					return (
						<li
							key={nav.id}
							className={`font-lato font-normal  cursor-pointer text-[18px] ${
								active === nav.title ? "text-gray-700" : "text-primary"
							} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
							onClick={() => setActive(nav.title)}
						>
							<Link to={`/${nav.id}`}>{nav.title}</Link>
						</li>
					);
				})}
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>

				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-smrtBlue absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						{navLinks.map((nav, index) => {
							if (nav.id === "login" && user) return;

							return (
								<li
									key={nav.id}
									className={`font-lato font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-white" : "text-dimWhite"
									} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
									onClick={() => setActive(nav.title)}
								>
									<Link to={`/${nav.id}`}>{nav.title}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
