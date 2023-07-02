import React, { useState } from "react";
import { Link } from "react-router-dom";
interface GameProps {
	title: string;
	subject: string;
	desc: string;
	duration: number;
}

const Game: React.FC<GameProps> = ({ title, subject, desc, duration }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleWindowClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
	};

	return (
		<div className="rounded border-2 border-solid border-gray-400 p-[24px] w-[390px] h-[323px] lg:mb-[60px] game-box-shadow flex flex-col justify-between">
			<div>
				<h3 className="text-smrtBlue text-[28px] leading-[150%]">{title}</h3>
				<h4 className="text-transDesc text-[16px] mb-[20px] font-normal">{subject}</h4>
				<p className="text-smrtBlack text-[18px] mb-[7px] leading-[150%]">{desc}</p>
				<span className="text-transDesc text-[16px] block font-normal">Длительность: {duration} минут</span>
			</div>
			<button
				className="group relative h-12 w-full overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white justify-end inline-block"
				onClick={openModal}
			>
				Начать игру
				<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
			</button>

			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-[30%] flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm"
					onClick={closeModal}
				>
					<div
						className="bg-white rounded-lg px-[44px] py-[25px] h-[340px] w-[500px] text-center flex flex-col justify-between game-box-shadow"
						onClick={handleWindowClick}
					>
						<div>
							<h3 className="text-smrtBlue text-[45px] leading-[150%]">{title}</h3>
							<h4 className="text-transDesc text-[16px] mb-[20px] font-normal">{subject}</h4>
							<p className="text-smrtBlack text-[14px] mb-[22px] leading-[150%]">{desc}</p>
							<span className="text-transDesc text-[16px] block font-normal">
								Длительность: {duration} минут
							</span>
						</div>
						<button className="group relative h-12 w-[278px] overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white justify-end text-center mx-auto inline-block hover:bg-blue-700 ease-in-out">
							<Link to="/quiz" className="w-72 h-32">
								Начать
							</Link>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Game;
