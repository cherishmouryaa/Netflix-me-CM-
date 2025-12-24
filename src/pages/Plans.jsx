import { useNavigate } from "react-router-dom";

function Plans() {
    const navigate = useNavigate();

    const selectPlan = (plan) => {
        localStorage.setItem("plan", plan);
        navigate("/profiles");
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
            <h1 className="text-3xl font-bold mb-10">
                Choose the plan that’s right for you
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
                <div className="border border-gray-600 p-6 rounded">
                    <h2 className="text-xl font-semibold mb-2">Basic</h2>
                    <p className="text-gray-400 mb-4">₹199 / month</p>
                    <button
                        onClick={() => selectPlan("Basic")}
                        className="w-full bg-netflixRed py-2 rounded"
                    >
                        Choose Plan
                    </button>
                </div>

                <div className="border border-gray-600 p-6 rounded scale-105 bg-black/80">
                    <h2 className="text-xl font-semibold mb-2">Standard</h2>
                    <p className="text-gray-400 mb-4">₹499 / month</p>
                    <button
                        onClick={() => selectPlan("Standard")}
                        className="w-full bg-netflixRed py-2 rounded"
                    >
                        Choose Plan
                    </button>
                </div>

                <div className="border border-gray-600 p-6 rounded">
                    <h2 className="text-xl font-semibold mb-2">Premium</h2>
                    <p className="text-gray-400 mb-4">₹649 / month</p>
                    <button
                        onClick={() => selectPlan("Premium")}
                        className="w-full bg-netflixRed py-2 rounded"
                    >
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Plans;
