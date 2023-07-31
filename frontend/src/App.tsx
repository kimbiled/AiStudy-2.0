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
					<Route path="writing-practice" element={<WritingPractice />} />
					<Route path="game-practice" element={<GamePractice />} />
					<Route path="video-practice" element={<VideoPractice />} />
					<Route path="reading-practice" element={<Reading />} />
					<Route path="listening-practice" element={<Listening />} />
					<Route path="speaking-practice" element={<Speaking />} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</Providers>
	);
}
