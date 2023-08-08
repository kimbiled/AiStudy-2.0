import { Dispatch, SetStateAction } from "react";
import { exit } from "../assets";
interface stateProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	dreamScore: any;
	currentScore: any;
	dateExam: any;
	exam: any;
}

const UserEducation = ({ open, setOpen, dreamScore, currentScore, dateExam, exam }: stateProps) => {
	if (!open) return null;
	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-[30%] flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm"
			// onClick={closeModal}
		>
			<div
				className="relative bg-white rounded-lg px-[35px] py-[30px] h-[340px] w-[500px] text-center flex flex-col justify-between game-box-shadow"
				// onClick={handleWindowClick}
			>
				<img
					src={exit}
					alt="exitIcon"
					className="absolute right-5 top-5 opacity-60 hover:opacity-100 ease-in-out"
					onClick={() => {
						setOpen(false);
					}}
				/>
				<div>
					<h3 className="text-smrtBlue text-[32px] leading-[150%]">Текущий уровень</h3>
					<h4 className="text-transDesc text-[16px] mb-[20px] font-normal">
						{exam} - {dateExam}
					</h4>
					<div className="flex flex-wrap justify-center max-w-[1230px] mx-auto gap-[20px]">
						<div className="rounded border-2 border-solid border-gray-400 py-[17px] px-[11px] w-[130px] h-[130px]  game-box-shadow flex flex-col justify-between">
							<p className="text-smrtBlack text-[14px] leading-[120%]">Текущий уровень:</p>
							<h3 className="text-smrtBlue text-[45px] leading-[150%]">{currentScore}</h3>
						</div>
						<div className="rounded border-2 border-solid border-gray-400 py-[17px] px-[11px] w-[130px] h-[130px] game-box-shadow flex flex-col justify-between">
							<p className="text-smrtBlack text-[14px] leading-[120%]">Желаемый уровень:</p>
							<h3 className="text-smrtBlue text-[45px] leading-[150%]">{dreamScore}</h3>
						</div>
					</div>
				</div>
				<button
					className="group relative h-12 w-[278px] overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white justify-end text-center mx-auto inline-block"
					onClick={() => {
						setOpen(false);
					}}
				>
					Назад
					<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
				</button>
			</div>
		</div>
	);
};

export default UserEducation;
