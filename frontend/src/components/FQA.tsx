import styles from "../style";
import { useState } from "react";
import "../index.css";
const FQA = () => {
	const [selectedQuestion, setSelectedQuestion] = useState(0);
	const FAQs = [
		{
			id: 1,
			question: "Как мне зарегистрироваться на платформе AIStudy?",
			answer: `Для регистрации на платформе AIStudy перейдите на главную страницу и нажмите на кнопку "Регистрация". Затем введите свои данные, такие как имя, адрес электронной почты и пароль. После заполнения всех необходимых полей нажмите кнопку "Зарегистрироваться". Вы получите подтверждение на указанную электронную почту.`,
		},
		{
			id: 2,
			question: "Как я могу получить доступ к учебным материалам на AIStudy?",
			answer: "После успешной регистрации и входа в свой аккаунт, вы сможете найти все учебные материалы на своей личной панели управления. Там вы найдете разделы с уроками, упражнениями и практическими тестами для экзаменов IELTS и SAT. Вы можете выбрать нужный раздел и начать изучение материалов.",
		},
		{
			id: 3,
			question: "Как работает функция проверки эссе на AIStudy?",
			answer: "Чтобы воспользоваться функцией проверки эссе, загрузите свое эссе на платформу AIStudy в соответствующем разделе. Мы используем передовые технологии обработки естественного языка и алгоритмы машинного обучения для оценки вашего эссе и предоставления детальной обратной связи. Вы получите конструктивные советы и рекомендации по улучшению своих навыков письма.",
		},
		{
			id: 4,
			question: "Могу ли я отслеживать свой прогресс на платформе AIStudy?",
			answer: "Да, AIStudy предоставляет возможность отслеживать ваш прогресс. Ваш личный кабинет содержит информацию о выполненных заданиях, результаты практических тестов и другие статистические данные. Вы сможете видеть свои достижения, слабые места и прогресс в обучении.",
		},
		{
			id: 5,
			question: "Как получить помощь, если у меня проблемы на AIStudy?",
			answer: "Если у вас возникли проблемы или вопросы, связанные с использованием платформы AIStudy, вы можете воспользоваться функцией обратной связи или отправить запрос в нашу службу поддержки. Мы готовы помочь вам в решении любых технических вопросов или предоставить необходимую информацию.",
		},
	];

	const handleQuestionClick = (index: number) => {
		setSelectedQuestion(index);

		if (window.innerWidth < 1200) {
			const bottomDiv = document.getElementById("bottomDiv");
			bottomDiv?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={`bg-smrtBlue font-bold pb-[185px] text-white font-lato`}>
			<div className=" mx-auto">
				<h2 className="text-center text-6xl font-bold mb-[60px] text-white shadow1 ">
					Часто задаваемые вопросы
				</h2>
				<div className="relative flex flex-col lg:flex-row-reverse gap-[40px]">
					<ul className="rounded-[15px] bg-white z-10 left-0 top-[38px] w-[350px] xs:w-[400px] ss:w-[600px] sm:w-[650px] md:w-[705px] lg:absolute mx-auto">
						{FAQs.map((item, index) => (
							<li
								key={index}
								className={`text-smrtBlack leading-[120%] border-solid border-b-2 pl-[27px] pr-[55px] flex items-center pt-[35px] pb-[31px] gap-[28px] last:border-0 cursor-pointer ${
									selectedQuestion === index ? "question-box-shadow" : ""
								}`}
								onClick={() => handleQuestionClick(index)}
							>
								<div
									className={`rounded-full ${
										selectedQuestion === index ? "bg-chosenQuestion" : " bg-gray-800"
									} w-[18px] h-[18px]`}
								></div>
								<p className="text-[19px]">{item.question}</p>
							</li>
						))}
					</ul>
					<div
						id="bottomDiv"
						className="relative w-[350px] xs:w-[400px] ss:w-[600px] sm:w-[711px] h-[505px] rounded-lg bg-gradient-to-b from-smrtBlue to-grad2 sm:pl-[150px] pr-[20px] sm:pr-[68px] pt-[20px] sm:pt-[40px] sm:pb-[100px] border-solid border-[1px] border-white text-right mx-auto lg:mx-0"
					>
						<h3 className="text-[28px] mb-[34px]">{FAQs[selectedQuestion].question}</h3>
						<p className="text-[22px] leading-[120%]">{FAQs[selectedQuestion].answer}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FQA;
