import { Dispatch, SetStateAction } from "react";

interface LessonProps {
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const Lessons = ({ isOpen, setOpen}: LessonProps) =>{
    return(
        <div className="font-lato fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-y-hidden"
             style={{ display: isOpen ? "flex" : "none" }}>
            <div className="relative w-[500px] h-[340px] bg-white rounded-md flex flex-col p-6 gap-4 text-center">
                <div className="flex flex-col gap-3">
                    <p className="text-smrtBlue font-bold text-[32px]">Количество занятий</p>
                    <p className="text-practiceGray">IELTS</p>
                </div>
                <div className="flex flex-row justify-around text-center">
                    <div className="w-32 h-32 border-[1px] rounded flex flex-col items-center p-2 justify-center">
                        <p className="font-bold text-sm tracking-wider">Всего занятий за курс:</p>
                        <p className="text-smrtBlue font-bold text-[40px]">56</p>
                    </div>
                    <div className="w-32 h-32 border-[1px] rounded flex flex-col items-center p-2 justify-center">
                        <p className="font-bold text-sm tracking-wider">Выполнено занятий:</p>
                        <p className="text-smrtBlue font-bold text-[40px]">42</p>
                    </div>
                    <div className="w-32 h-32 border-[1px] rounded flex flex-col items-center p-2 justify-center">
                        <p className="font-bold text-sm tracking-wider">Осталось занятий:</p>
                        <p className="text-smrtBlue font-bold text-[40px]">14</p>
                    </div>
                </div>
                <button className="w-full h-[54px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out"
                        onClick={()=>{
                            setOpen((prevState)=>!prevState)
                         }}
                >
                    Назад
                </button>
            </div>
        </div>

    );
}

export default Lessons;