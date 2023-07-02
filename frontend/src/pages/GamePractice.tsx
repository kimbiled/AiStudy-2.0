import Game from "../components/Game";
import { Footer } from "../components";
import { games } from "../constants";
import styles from "../style";
const GamePractice = () => {
	return (
		<>
			<section className="pb-[150px] pt-[40px]">
				<div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
					<h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px]">Game Practice</h2>
					<h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">Учебные материалы</h3>
					<div className="flex text-smrtBlack mb-[70px] ">
						<div className=" p-4 font-medium">
							Экзамен:{" "}
							<span className="font-lato border rounded-lg pl-4 pr-20 py-2 text-transDesc">IELTS</span>
						</div>
						<div className=" p-4 font-medium">
							Уроки:{" "}
							<span className="font-lato border rounded-lg pl-4 pr-20 py-2 text-transDesc">
								Writing №1
							</span>
						</div>{" "}
					</div>
					<div className="flex flex-wrap justify-center max-w-[1230px] mx-auto gap-[30px]">
						{games.map((game) => (
							<Game
								key={game.id}
								title={game.title}
								subject={game.subject}
								desc={game.desc}
								duration={game.duration}
							/>
						))}
					</div>
				</div>
			</section>
			
		</>
	);
};

export default GamePractice;
