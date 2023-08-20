import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Education from "./pages/Education.tsx";
import WritingPractice from "./pages/WritingPractice.tsx";
import GamePractice from "./pages/GamePractice.tsx";
import VideoPractice from "./pages/VideoPractice.tsx";
import Profile from "./pages/Profile.tsx";
import Quiz from "../src/components/Quiz/Quiz.tsx";
import Reading from "./pages/Reading.tsx";
import Listening from "./pages/Listening.tsx";
import Speaking from "./pages/Speaking.tsx";
import Writing from "./pages/Writing.tsx";
import Mock from "./pages/Mock.tsx";

import Providers from "./context/Providers.tsx";
export default function App() {
	return (
		<Providers>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="education" element={<Education />} />
					<Route path="quiz" element={<Quiz />} />
					<Route path="practice/writing" element={<WritingPractice />} />
					<Route path="practice/game" element={<GamePractice />} />
					<Route path="practice/video" element={<VideoPractice />} />
					<Route path="practice/readingMock" element={<Reading />} />
					<Route path="practice/listeningMock" element={<Listening />} />
					<Route path="practice/speakingMock" element={<Speaking />} />
					<Route path="practice/writingMock" element={<Writing />} />
					<Route path="profile" element={<Profile />} />
					<Route path="mock" element={<Mock />}/>
				</Route>
			</Routes>
		</Providers>
	);
}
