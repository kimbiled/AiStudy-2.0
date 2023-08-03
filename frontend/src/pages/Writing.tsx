import styles from "../style";
const Writing = () =>{
    return(
        <section className="pb-[150px] pt-[40px]">
            <div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
                <h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px] text-[55px]">
                    Writing
                </h2>
                <h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">
                    Пробный тест по навыкам письма
                </h3>
                <div className="flex text-smrtBlack mb-[27px] text-[24px] font-medium">
                    Задание: Напишите эссе на предложеную тему на 80-100 слов.
                </div>
                <div className="flex text-smrtBlack mb-[27px] text-[24px] font-medium">
                    Task: Write an essay about given topic, word limit 80-100 words.
                </div>
                <div className="max-w-[1296px] h-[450px] border-[1px] border-gray-300 rounded-[30px] p-6">
                    <textarea placeholder="Write there..." className="focus:outline-none w-full h-auto"/> 
                </div>
                <div className="flex justify-end max-w-[1296px] mt-6">
                    <button className="group relative h-12 w-48 overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white">
                        Завершить
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Writing;
