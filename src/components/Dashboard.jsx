import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "../index.css";

const DashboardLayout = () => {
    const { userId, isLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !userId) {
        navigate("/sign-in");
        }
    }, [isLoaded, userId, navigate]);

    const { isPending, error, data } = useQuery({
        queryKey: ["userChats"],
        queryFn: () =>
        fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
            credentials: "include",
        }).then((res) => res.json()),
    });

    if (!isLoaded) return "Loading...";

    return (
        <div className="Dashboard">
            <div className="side">
                <div className="chatList">
                    <span className="title">DASHBOARD</span>
                    <Link to="/dashboard">New Chat</Link>
                    <Link to="/">Explore GeminiTalk</Link>
                    <hr />
                    <span className="title">CHATS HISTORY</span>
                    <div className="list">
                        {
                            isPending ? "Loading..." : error ? "Something went wrong!" : 
                            data?.map((chat) => (
                                <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>{chat.title}</Link>
                            ))
                        }
                    </div>
                    <hr />
                </div>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
