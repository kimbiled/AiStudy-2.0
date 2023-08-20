import styles from "../style";
import { heroPhoto } from "../assets";
import { useCallback, useState, useEffect } from "react";
const Hero = () => {
	const [scroll, setScroll] = useState(0);
	const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
	useEffect(() => {
	onScroll();
	window.addEventListener("scroll", onScroll);
	return () => window.removeEventListener("scroll", onScroll);
	}, [onScroll]);
	
	const onCallbackRender = useCallback(() => {
	window.scrollTo(0, 2000);
	}, []);

	return (
		<section id="home" className={`   `} style={{ backgroundColor: "white" }}>
			<div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
				<div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-12 px-6`}>
					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="shadowHeader flex-1 font-lato font-semibold ss:text-[72px] text-[52px] text-smrtBlack ss:leading-[80.8px] leading-[45px]">
							Подготовка к IELTS в<br className="sm:block hidden" />
							<span className="text-smrtBlue"> игровой</span> форме
						</h1>
					</div>

					<p
						className={`font-lato font-semibold text-dimWhite text-[26px] leading-[40.8px] max-w-[670px] mt-10 text-primary`}
					>
						Используя новый подход к обучению c ИИ и игровыми режимами, вы сможете получить желаемый балл
					</p>

					<div className="flex w-full py-10 mt-10 space-x-20 text-2xl font-lato font-bold text-white">
						<button className="group relative h-14 w-52 overflow-hidden rounded-[15px] bg-smrtBlue">
							Начать
							<div className="absolute inset-0 h-full w-full scale-0 rounded-[15px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
						</button>
						<button className="group relative h-14 w-52 overflow-hidden rounded-[15px] bg-smrtBlue"
								onClick={onCallbackRender}>
							О нас
							<div className="absolute inset-0 h-full w-full scale-0 rounded-[15px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
						</button>
					</div>
				</div>

				<div className={`flex-1 hidden lg:flex justify-end items-end md:my-0 my-10 relative`}>
					<div className="shadow-2xl font-lato text-2xl font-bold flex items-center justify-center p-8 absolute bottom-[120px] left-[-80px] text-center w-[445px] h-24 z-[6] text-primary bg-[#D1F772] rounded-full">
						74% учеников уже сдали экзамен на желаемый балл
					</div>
					<img src={heroPhoto} alt="billing" className="w-[80%] h-[100%] relative z-[5]" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
