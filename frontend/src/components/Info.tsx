import React from "react";

import { camera, book, searchbook } from "../assets";

const Info = () => {
	return (
		<div className="bg-white rounded-[30px] h-[3400px] sm:h-[3100px] md:h-[2600px] max-w-[1296px] m-auto mt-16 mb-48 relative shadow-2xl">
			<div className="m-auto px-[20px] max-w-[1225px] h-[1475px] flex flex-col items-center font-lato font-bold text-center gap-48">
				<div className="max-w-[1130px] h-64 py-14 xs:py-24">
					<h2 className="text-smrtBlack shadow1 leading-[40px] ss:leading-[60px] text-[25px] xs:text-[30px] sm:text-[42px] md:text-[48px] lg:text-[55px]">
						Начните свой путь прямо сейчас вместе с абсолютно новыми методиками
					</h2>
					<p className="py-8 text-[#4C4F6A] text-[22px] sm:text-[27px] lg:text-[30px]">
						Мы предлагаем новую программу подготовки, что позволит <br />
						сделать ваш график и результат эффективнее!{" "}
					</p>
				</div>

				<div className="text-white flex flex-wrap justify-center gap-8 lg:gap-12">
					<div className="w-[310px] xs:w-[430px] h-[320px] xs:h-[350px] lg:w-[500px] lg:h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center">
						<div className="gradient-counter-left flex justify-center items-center rounded-2xl">
							<p className="text-3xl md:text-4xl">1</p>
						</div>

						<div className="w-[450px] h-auto flex flex-col gap-6">
							<h5 className="text-3xl xs:text-4xl lg:text-5xl leading-[3rem]">Игровые задания</h5>
							<p className="text-[14px] xs:text-[16px] lg:text-2xl text-[leading-10 px-[5px] lg:p-0">
								Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на
								практике без наскученных заданий
							</p>
						</div>
					</div>
					<div className="w-[310px] xs:w-[430px] h-[320px] xs:h-[350px] lg:w-[500px] lg:h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center">
						<div className="gradient-counter-left flex justify-center items-center rounded-2xl">
							<p className="text-3xl md:text-4xl">2</p>
						</div>

						<div className="w-[450px] h-auto flex flex-col gap-6">
							<h5 className="text-3xl xs:text-4xl lg:text-5xl leading-[3rem]">Искусственный интеллект</h5>
							<p className="text-[14px] xs:text-[16px] lg:text-2xl text-[leading-10 px-[5px] lg:p-0">
								Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на
								практике без наскученных заданий
							</p>
						</div>
					</div>
					<div className="w-[310px] xs:w-[430px] h-[320px] xs:h-[350px] lg:w-[500px] lg:h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center">
						<div className="gradient-counter-left flex justify-center items-center rounded-2xl">
							<p className="text-3xl md:text-4xl">3</p>
						</div>

						<div className="w-[450px] h-auto flex flex-col gap-6">
							<h5 className="text-3xl xs:text-4xl lg:text-5xl leading-[3rem]">Свободное расписание</h5>
							<p className="text-[14px] xs:text-[16px] lg:text-2xl text-[leading-10 px-[5px] lg:p-0">
								Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на
								практике без наскученных заданий
							</p>
						</div>
					</div>
					<div className="w-[310px] xs:w-[430px] h-[320px] xs:h-[350px] lg:w-[500px] lg:h-[480px] rounded-[45px] bg-smrtBlue  relative flex justify-center items-center">
						<div className="gradient-counter-left flex justify-center items-center rounded-2xl">
							<p className="text-3xl md:text-4xl">4</p>
						</div>

						<div className="w-[450px] h-auto flex flex-col gap-6">
							<h5 className="text-3xl xs:text-4xl lg:text-5xl leading-[3rem]">
								Отсутствие преподавателей
							</h5>
							<p className="text-[14px] xs:text-[16px] lg:text-2xl text-[leading-10 px-[5px] lg:p-0">
								Позволяют укрепить полученные знания в долгосрочной памяти и проверять знания на
								практике без наскученных заданий
							</p>
						</div>
					</div>
				</div>

				<div className="max-w-[1090px] flex flex-col gap-20 flex-wrap">
					<h2 className="shadow2 text-smrtBlack text-[30px] sm:text-[42px] md:text-[48px] lg:text-[55px]">
						Не забудем про классические дополнения к подготовке
					</h2>

					<div className="flex flex-row justify-center md:justify-between align-top flex-wrap gap-5 md:gap-[15.95px]">
						<div className="flex flex-col max-w-[275px] h-64 justify-center items-center gap-4">
							<img src={camera} alt="cameraIcon" />
							<h4 className="text-[27px] font-bold text-smrtBlack">Мастер - классы</h4>
							<p className="text-[#4C4F6A]">
								Экспертные занятия для получения ценных советов и стратегий.
							</p>
						</div>

						<div className="md:border-r-2 border-[#4C4F6A]"></div>
						<div className="flex flex-col max-w-[275px] h-64 justify-center items-center gap-4">
							<img src={book} alt="bookIcon" />
							<h4 className="text-[27px] font-bold text-smrtBlack">Пробные тесты</h4>
							<p className="text-[#4C4F6A]">
								Полноценные имитации экзаменов для оценки уровня и практики.
							</p>
						</div>
						<div className="md:border-r-2 border-[#4C4F6A]"></div>
						<div className="flex flex-col w-[275px] h-64 justify-center items-center gap-4">
							<img src={searchbook} alt="searchBookIcon" />
							<h4 className="text-[27px] font-bold text-smrtBlack">Ресурсы</h4>
							<p className="text-[#4C4F6A]">
								Дополнительные материалы и инструменты для углубленного изучения.
							</p>
						</div>
					</div>

					<div className="w-60 xs:w-96 h-18 m-auto">
						<button className="group relative w-full h-14 overflow-hidden rounded-2xl bg-smrtBlue  text-white font-bold">
							Зарегистрироваться
							<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Info;
