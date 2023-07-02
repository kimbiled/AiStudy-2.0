import { useState } from "react";
import { Link } from "react-router-dom";
import { confetti, exit } from "../../assets/index";
import "./Quiz.css";
interface correctnessProps {
	correct: any;
	onClickReset: any;
}

const questions = [
	{
		title: "IELTS - это",
		variations: ["Международный экзамен по английскому", "Математика", "Химия"],
		correct: 0,
	},
	{
		title: "SAT - это",
		variations: ["Математика", "Тест на критическое мышление", "Стандартизованный тест"],
		correct: 1,
	},
	{
		title: "Ваше любимое мороженое?",
		variations: ["Сливочное", "Шоколадное", "Клубничное"],
		correct: 0,
	},
	{
		title: "Логический вопрос, который задают многим 2+2=?",
		variations: ["8", "22", "4"],
		correct: 2,
	},
];

function Result({ correct, onClickReset }: correctnessProps) {
	return (
		<div className=" relative w-[550px] h-72 font-bold font-lato p-6 shadow m-auto border-[1px] border-practiceGray rounded mt-12 mb-16 flex flex-col items-center justify-center gap-3 ">
			<img src={confetti} alt="confetti" width={120} height={120} />
			<Link to="/">
				<img
					src={exit}
					alt="cancel"
					className="absolute right-5 top-[20px] opacity-60 hover:opacity-100 ease-in-out"
					width={15}
					height={15}
				/>
			</Link>

			<p className="text-xl">
				Вы правильно отгадали {correct} из {questions.length}
			</p>
			<button
				className="text-lg w-56 h-[40px] border-[1px] border-smrtBlue bg-smrtBlue text-white rounded"
				onClick={onClickReset}
			>
				Попробовать снова
			</button>
		</div>
	);
}

export default function Game() {
	const [step, setStep] = useState(0);
	const question = questions[step];
	const percentage = Math.round((step / questions.length) * 100);
	const [correct, setCorrect] = useState(0);

	const onClickReset = () => {
		setStep(0);
		setCorrect(0);
	};

	const onClickVariant = (index) => {
		setStep(step + 1);

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	};

	return (
		<>
			{step !== questions.length ? (
				<div className="w-[550px] h-72 m-auto border-[1px] border-practiceGray rounded mt-12 mb-16 ">
					<div className="progress">
						<progress className="progress" max="100" value={percentage} />
					</div>

					<div className="flex flex-col gap-4 font-bold font-lato p-6 shadow ">
						<h5 className="text-center text-xl">{question.title}</h5>
						<ul className="flex flex-col gap-4">
							{question.variations.map((obj, index) => (
								<li
									className="border-[1px] border-practiceGray rounded-3xl text-center p-3 bg-blue-300 hover:bg-blue-700 hover:text-white ease-in-out "
									onClick={() => onClickVariant(index)}
									key={obj}
								>
									{obj}
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				Result({ correct, onClickReset })
			)}
		</>
	);
}
