import React from "react";
import UserEducation from "./UserEducation";

interface stateProps {
	active: any;
	setActive: any;
	isFull: any;
	setFull: any;
}

const UserLevel = ({ active, setActive, isFull, setFull }: stateProps) => {
	const [exam, setExam] = React.useState("");
	const [currentScore, setCurrentScore] = React.useState("");
	const [dreamScore, setDreamScore] = React.useState("");
	const [dateExam, setDateExam] = React.useState("");

	const handleClick = () => {
		setActive(false);
		setFull(true);
		console.log(dreamScore, currentScore, dateExam, exam);
	};

	if (!active) return null;
	return (
		<>
			<div className=" font-lato font-bold blur ">
				<div className="text-center mt-16">
					<p className="text-smrtBlack shadow1">Мейрамбеков Нурсултан</p>
					<p className="text-primary text-3xl mt-4"> Моя страница</p>
				</div>

				<div className="flex flex-row mt-16 mb-16 gap-16 justify-center ">
					<div className="w-[560px] h-[585px] border-[1px] border-practiceBorderGray rounded profileShadow">
						<div className="py-12 flex flex-col items-center gap-14">
							<div className="w-[470px] h-[90px]">
								<p className="text-sm tracking-widest text-smrtBlack">Экзамен</p>
								<p className="text-[32px] text-smrtBlue">Выберите экзамен</p>
								<p className="font-normal">Информация о текущем экзамене</p>
							</div>

							<div className="w-[470px] h-[90px]">
								<p className="text-sm tracking-widest text-smrtBlack">Время подготовки</p>
								<p className="text-[32px] text-smrtBlue">Выберите дату</p>
								<p className="font-normal">
									Время за которое ты сможешь улучшить свой уровень и достигнуть желаемого результата!
								</p>
							</div>

							<div className="w-[470px] h-[90px]">
								<p className="text-sm tracking-widest text-smrtBlack">Ожидаемый результат</p>
								<p className="text-[32px] text-smrtBlue">Выберите уровень</p>
								<p className="font-normal">Информация о желаемом уровне</p>
							</div>

							<div className="w-[470px] text-center">
								<button className="w-[345px] h-[54px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out">
									Изменить
								</button>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="w-[515px] h-[275px] text-center border-[1px] border-practiceBorderGray rounded profileShadow flex flex-col justify-center align-center">
							<div className="w-[350px] flex flex-col m-auto gap-3">
								<p className="text-[32px] text-smrtBlue">Количество занятий</p>
								<p className="font-normal text-practiceGray">IELTS/SAT</p>
								<p className="text-lg">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus tincidunt{" "}
								</p>
								<button className="w-[350px] h-[45px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out">
									Изменить
								</button>
							</div>
						</div>
						<div className="w-[515px] h-[275px] text-center border-[1px] border-practiceBorderGray rounded profileShadow flex flex-col justify-center align-center">
							<div className="w-[350px] flex flex-col m-auto gap-3">
								<p className="text-[32px] text-smrtBlue">Текущий уровень</p>
								<p className="font-normal text-practiceGray">IELTS/SAT</p>
								<p className="text-lg">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus tincidunt{" "}
								</p>
								<button
									type="button"
									onClick={() => setActive(true)}
									className="w-[350px] h-[45px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out"
								>
									Изменить
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-[450px] h-96 my-6 mx-auto max-w-3xl font-lato font-bold">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
						<div className="flex text-center flex-col mt-4">
							<h3 className="text-3xl">Ваши данные</h3>
							<p>Данные для составления расписания</p>
						</div>

						<div className="relative">
							<form className="  px-8 pt-6 pb-8 w-full">
								<label className="text-lg flex">Экзамен</label>
								<input
									className="w-full border-[1px] rounded h-14 p-4"
									placeholder="SAT/IELTS"
									onChange={(e) => setExam(e.target.value)}
									value={exam}
								/>

								<label className="text-lg flex">Дата экзамена</label>
								<input
									className="w-full border-[1px] rounded h-14 p-4"
									placeholder="02/07/2023"
									onChange={(e) => setDateExam(e.target.value)}
									value={dateExam}
								/>

								<label className="text-lg flex">Текущий результат</label>
								<input
									className="w-full border-[1px] rounded h-14 p-4"
									placeholder="6.5/1320"
									onChange={(e) => setCurrentScore(e.target.value)}
									value={currentScore}
								/>
								<label className="text-lg flex">Желаемый результат</label>
								<input
									className="w-full border-[1px] rounded h-14 p-4"
									placeholder="8.0/1520"
									onChange={(e) => setDreamScore(e.target.value)}
									value={dreamScore}
								/>
							</form>
						</div>
						<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 text-lg"
								type="button"
								onClick={() => {
									setActive(false);
								}}
							>
								Отмена
							</button>
							<button
								className="text-white bg-smrtBlue text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
								type="button"
								onClick={() => handleClick()}
							>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserLevel;
