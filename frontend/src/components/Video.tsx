<link rel="stylesheet" href="https://cdn.plyr.io/3.6.3/plyr.css" />;
<script src="https://cdn.plyr.io/3.6.3/plyr.polyfilled.js"></script>;

const Video = ({ link }: { link: string }) => {
	console.log(link);
	return (
		<div className="flex justify-between flex-wrap gap-[20px]">
			<div>
				<div className="w-[770px] h-[420px] bg-black rounded border-2 border-solid border-#C0C0C0 mb-[18px]">
					<iframe className="w-full h-full" src={link}></iframe>
				</div>

				<h3 className="text-[25px] text-smrtBlack leading-[150%]">Работа над ошибками Writing Task 1</h3>
			</div>
			<div className="rounded border-2 border-solid border-#C0C0C0 pt-[35px] py-[40px] px-[40px] w-[415px] lg:mb-[60px] game-box-shadow">
				<h2 className="text-smrtBlack text-[25px] leading-[150%] mb-[15px]">
					Работа над ошибками Writing Task 1
				</h2>
				<p className="text-smrtBlack text-[16px] font-normal leading-[160%]">
					предлагает уникальную возможность анализировать и исправлять ошибки в заданиях по письму первого
					типа экзаменов, таких как IELTS или SAT. Мы предоставляем индивидуальную обратную связь, помогаем
					понять слабые места и предлагаем конструктивные рекомендации для улучшения вашего навыка написания
					текстов. Наша цель - помочь вам повысить качество и эффективность вашего выполнения заданий Writing
					Task 1.
				</p>
			</div>
		</div>
	);
};

export default Video;
