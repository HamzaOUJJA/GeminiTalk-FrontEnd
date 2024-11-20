import { Link } from "react-router-dom";
import "../index.css";



const Home_Page = () => {
	const images = ["/background_1.png", "/background_2.png", "/background_3.png"]
	const back_image = images[Math.floor(Math.random() * 3)];
	return (
		<div className="Home_Page">
			<img src={back_image} className="home_background_image" />
			<div className="left">
				<h1>GeminiTalk</h1>
				<h3>
					Welcome to GeminiTalk — an AI-powered chatbot developed using the Gemini API on the MERN stack. GeminiTalk offers responsive, real-time interactions to answer questions, provide recommendations, and enhance engagement.        
				</h3>
				<Link to="/dashboard">START FOR FREE</Link>
			</div>
			
			<div className="right">
				<div className="imgContainer">
					<img src="/home_image.png" alt="" className="bot" />
				</div>
			</div>

			<div className="footer">
				<img src="/logo.png" alt="" />
				<p class="copyright">
    				&copy; 2024 <strong>GeminiTalk</strong> by Hamza OUJJA. All Rights Reserved. 
				</p>
			</div>
		</div>
	);
};

export default Home_Page;
