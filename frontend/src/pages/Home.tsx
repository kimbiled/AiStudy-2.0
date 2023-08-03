import styles from "../style";
import { Stats, Hero, Info, FQA, Mock } from "../components";

const App = () => {
	return (
		<div className=" w-full overflow-hidden">
			<div>
				<div className={` ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Hero />
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#167BDE"
						fill-opacity="1"
						d="M0,96L48,96C96,96,192,96,288,101.3C384,107,480,117,576,138.7C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</div>

			<div className={` bg-smrtBlue ${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Mock />
					<Stats />
					<Info />
					<FQA />
				</div>
			</div>
		</div>
	);
};

export default App;
