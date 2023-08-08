import React from "react";

import { useUser } from "../context/user/useUser.tsx";

import Exam from '../components/Profile/Exam.tsx';
import Lessons from '../components/Profile/Lessons.tsx';
import CurrentLevel from '../components/Profile/currentLevel.tsx';
const Profile = () => {
	const { user } = useUser();
	const [examModal, setExamModal] = React.useState(false);
	const [currentLevelModal, setCurrentLevelModal] = React.useState(false);
	const [lessonModal, setLessonModal] = React.useState(false);

	return (
		<section>
				<div className="font-lato font-bold">
					<div className="text-center mt-16">
						<p className="text-smrtBlack shadow1 text-[55px]">
							{user?.lastName} {user?.firstName}
						</p>
						<p className="text-primary text-3xl mt-4"> Моя страница</p>
					</div>

					<div className="flex flex-row mt-16 mb-16 gap-16 justify-center flex-wrap">
						<div className="max-w-[560px] ss:w-[560px] h-[585px] border-[1px] border-practiceBorderGray rounded profileShadow">
							<div className="py-12 flex flex-col items-center gap-14">
								<div className="w-[470px] h-[90px]">
									<p className="text-sm tracking-widest text-smrtBlack">Экзамен</p>
									<p className="text-[32px] text-smrtBlue">Выберите экзамен</p>
									<p className="font-normal">
										Информация о текущем экзамене для дальнейшего составления плана
									</p>
								</div>

								<div className="w-[470px] h-[90px]">
									<p className="text-sm tracking-widest text-smrtBlack">Время подготовки</p>
									<p className="text-[32px] text-smrtBlue">Выберите дату</p>
									<p className="font-normal">
										Время за которое ты сможешь улучшить свой уровень и достигнуть желаемого
										результата!
									</p>
								</div>

								<div className="w-[470px] h-[90px]">
									<p className="text-sm tracking-widest text-smrtBlack">Ожидаемый результат</p>
									<p className="text-[32px] text-smrtBlue">Выберите уровень</p>
									<p className="font-normal">Информация о желаемом уровне</p>
								</div>

								<div className="w-[470px] text-center">
									<button 
										className="w-[345px] h-[54px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out"
										onClick={()=>{
											setExamModal(prevState => !prevState);
										}}
										>
										Изменить
									</button>
								</div>
							</div>
						</div>

						<div className="flex flex-row lg:flex-col gap-8 flex-wrap justify-center">
							<div className="max-w-[515px] ss:w-[515px] h-[275px] text-center border-[1px] border-practiceBorderGray rounded profileShadow flex flex-col justify-center align-center">
								<div className="w-[350px] flex flex-col m-auto gap-3">
									<p className="text-[32px] text-smrtBlue">Количество занятий</p>
									<p className="font-normal text-practiceGray">IELTS/SAT</p>
									<p className="text-lg">
										Отслеживаемая часть для просмотра присутствие/отсутствие на занятиях
									</p>
									<button 
										className="w-[345px] h-[54px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out"
										onClick={()=>{
											setLessonModal(prevState => !prevState);
										}}
										>
										Посмотреть
									</button>
								</div>
							</div>
							<div className="w-[515px] h-[275px] text-center border-[1px] border-practiceBorderGray rounded profileShadow flex flex-col justify-center align-center">
								<div className="w-[350px] flex flex-col m-auto gap-3">
									<p className="text-[32px] text-smrtBlue">Текущий уровень</p>
									<p className="font-normal text-practiceGray">IELTS/SAT</p>
									<p className="text-lg">
										Отслеживаемая часть для просмотра текущего/будущего балла по экзаменам
									</p>
									<button
										type="button"
										className="w-[350px] h-[45px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out"
										onClick={()=>{
											setCurrentLevelModal(prevState => !prevState);
										}}
									>
										Посмотреть
									</button>
								</div>
							</div>
						</div>
					</div>
					<Exam isVisible={examModal} setIsVisible={setExamModal}/>
					<Lessons isOpen={lessonModal} setOpen={setLessonModal}/>
					<CurrentLevel isDisplayed={currentLevelModal} setDisplayed={setCurrentLevelModal}/>
				</div>
			</section>
	);
};

export default Profile;
