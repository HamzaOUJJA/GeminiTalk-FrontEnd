import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Dashboard_Page = () => {
    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (text) => {
            return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
                method: "POST",
                credentials: "include",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            }).then((res) => res.json());
        },
        onSuccess: (id) => {
            queryClient.invalidateQueries({ queryKey: ["userChats"] });
            navigate(`/dashboard/chats/${id}`);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;

        mutation.mutate(text);
    };
    return (
        <div className="Dashboard_Page">
            <div className="texts">
                <div className="logo">
                    <img src="/logo.png" alt="" />
                    <h1>GeminiTalk</h1>
                </div>
            </div>
            <div className="formBox">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" placeholder="Message GeminiTalk" />
                    <button>
                        <img src="/arrow.png" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard_Page;
