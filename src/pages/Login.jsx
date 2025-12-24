import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("loggedIn", "true");
        navigate("/plans");
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <div className="bg-black/80 p-10 rounded w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6">Sign In</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-3 bg-gray-800 rounded"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 p-3 bg-gray-800 rounded"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-netflixRed py-3 rounded font-semibold hover:bg-red-700"
                >
                    Sign In
                </button>

                <p className="mt-6 text-gray-400 text-sm">
                    New to Netflix?{" "}
                    <span className="text-white cursor-pointer">
                        Sign up now
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;
