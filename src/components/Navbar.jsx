import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
    const [showSearch, setShowSearch] = useState(false);
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    // Get current profile
    const profileData = localStorage.getItem("profile");
    const profile = profileData ? JSON.parse(profileData) : null;
    const isKids = profile?.isKids;

    useEffect(() => {
        if (onSearch) {
            onSearch(value);
        }
    }, [value, onSearch]);

    const handleSignOut = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    const handleSwitchProfile = () => {
        // Only remove profile, keep login & plan
        localStorage.removeItem("profile");
        navigate("/profiles");
    };

    return (
        <nav className="fixed top-0 z-50 w-full h-16 bg-black bg-opacity-90 flex items-center px-6">
            {/* LEFT */}
            <h1
                className="text-red-600 text-2xl font-bold cursor-pointer"
                onClick={() => navigate(isKids ? "/kids" : "/browse")}
            >
                NETFLIX
            </h1>

            {/* RIGHT */}
            <div className="ml-auto flex items-center space-x-6 text-white">
                {/* SEARCH */}
                <div className="relative">
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <Search size={22} />
                    </button>

                    {showSearch && (
                        <input
                            autoFocus
                            type="text"
                            placeholder="Titles, people, genres"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="absolute right-0 top-8 w-64 bg-black border border-gray-600 px-3 py-1 text-sm outline-none"
                        />
                    )}
                </div>

                {/* SWITCH PROFILE – ONLY FOR ADULT */}
                {!isKids && (
                    <button
                        onClick={handleSwitchProfile}
                        className="text-sm hover:underline"
                    >
                        Switch Profile
                    </button>
                )}

                {/* SIGN OUT */}
                <button
                    onClick={handleSignOut}
                    className="text-sm hover:underline"
                >
                    Sign Out
                </button>

                {/* PROFILE ICON */}
                <div className="w-8 h-8 rounded bg-gray-600" />
            </div>
        </nav>
    );
}

export default Navbar;
