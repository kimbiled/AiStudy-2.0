import { AuthProvider } from "./context/Auth/useAuth.tsx";
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
export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="register" element={<Register></Register>} />
					<Route path="login" element={<Login></Login>} />
					<Route path="education" element={<Education></Education>} />
					<Route path="writing-practice" element={<WritingPractice></WritingPractice>} />
					<Route path="game-practice" element={<GamePractice></GamePractice>} />
					<Route path="video-practice" element={<VideoPractice></VideoPractice>} />
					<Route path="quiz" element={<Quiz></Quiz>} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}
