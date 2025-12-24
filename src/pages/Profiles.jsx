import { useNavigate } from "react-router-dom";
import profiles from "../data/profiles";

function Profiles() {
    const navigate = useNavigate();

    const selectProfile = (profile) => {
        localStorage.setItem("profile", JSON.stringify(profile));

        // Navigate based on profile type
        if (profile.isKids) {
            navigate("/kids");
        } else {
            navigate("/browse");
        }
    };

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl mb-10">Who's watching?</h1>

            <div className="flex space-x-8">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        onClick={() => selectProfile(profile)}
                        className="cursor-pointer text-center"
                    >
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-32 h-32 rounded hover:ring-4 hover:ring-white transition"
                            onError={(e) => {
                                e.target.src =
                                    "https://via.placeholder.com/150/141414/ffffff?text=Profile";
                            }}
                        />
                        <p className="mt-3 text-gray-300">{profile.name}</p>
                    </div>
                ))}
            </div>

            <button className="mt-12 px-6 py-2 border border-gray-400 text-gray-300 hover:text-white hover:border-white">
                Manage Profiles
            </button>
        </div>
    );
}

export default Profiles;
