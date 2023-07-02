import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import "../index.css";
const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col bg-footerBg `}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full container max-w-[1400px]`}>
			<div className="flex-[0.6] flex flex-col justify-start">
				<img src={logo} alt="smarttestprep" className="w-[266px] h-[72.14px] object-contain" />
				<div className="flex flex-row md:mt-[15px] mt-6">
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`w-[25px] h-[25px] object-contain cursor-pointer ${
								index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
							}`}
							onClick={() => window.open(social.link)}
						/>
					))}
				</div>
			</div>

			<div className="flex-[1.35] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
				{footerLinks.map((footerlink) => (
					<div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
						<h4 className="font-lato font-medium text-[24px] leading-[27px] text-footerTitle">
							{footerlink.title}
						</h4>
						<ul className="list-none mt-4">
							{footerlink.links.map((link, index) => (
								<li
									key={link.name}
									className={`font-lato font-medium text-[18px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
										index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
									}`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
				<div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
					<h4 className="font-lato font-medium text-[24px] leading-[27px] text-footerTitle">
						Подпишись на рассылку!
					</h4>
					<ul className="list-none mt-4">
						<li className="font-lato font-medium text-[15px] text-gray mb-4 width-[288px] relative">
							<div>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Email адрес"
									required
								/>
								<button
									type="submit"
									className="ml-2  absolute right-[12px] w-[16px] h-[16px] top-[50%] translate-y-[-50%]"
								>
									<img src="../src/assets/arrow-right.svg" alt="" />
								</button>
							</div>
						</li>
						<li className="font-lato font-medium text-[9px] text-white hover:text-secondary cursor-pointer mb-4 max-w-[288px]">
							*Подпишитесь на нашу рассылку, чтобы получать сообщения и ранние обновления от агентства
							Createx SEO.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default Footer;
