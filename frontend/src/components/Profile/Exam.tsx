import { Dispatch, SetStateAction } from "react";
import {exit} from "../../assets";

interface ExamProps {
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Exam = ({ isVisible, setIsVisible}: ExamProps) =>{
    return(
        <div className="font-lato fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-y-hidden"
             style={{ display: isVisible ? "flex" : "none" }}>
            <div className="relative w-[330px] h-[580px] bg-white rounded-md flex flex-col p-6 gap-4">
                <img src={exit} 
                     className="absolute top-[20px] right-[20px] opacity-50 hover:opacity-100"
                     onClick={()=>{
                        setIsVisible((prevState)=>!prevState)
                     }}
                />
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-3xl">Ваши данные</p>
                    <p className="font-medium text-sm">Данные для составления расписания</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-xl">Экзамен</p>
                    <input placeholder="Экзамен" type="text" className="border-[1px] border-black rounded w-full h-11 p-4 font-light"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-xl">Дата экзамена</p>
                    <input placeholder="Дата экзамена" type="text" className="border-[1px] border-black rounded w-full h-11 p-4 font-light"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-xl">Текущий уровень</p>
                    <input placeholder="Уровень" type="text" className="border-[1px] border-black rounded w-full h-11 p-4 font-light"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-xl">Желаемый уровень</p>
                    <input placeholder="Уровень" type="text" className="border-[1px] border-black rounded w-full h-11 p-4 font-light"/>
                </div>
                <button className="w-full h-[54px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out">
                    Сохранить
                </button>
            </div>
        </div>

    );
}

export default Exam;