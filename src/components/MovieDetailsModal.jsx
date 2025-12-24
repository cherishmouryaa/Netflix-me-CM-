import { useEffect } from "react";
import Row from "./Row";
import { moviesByGenre } from "../data/movieCatalog";

function MovieDetailsModal({ movie, onClose }) {
    if (!movie) return null;

    // 🔒 Lock background scroll
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalStyle || "auto";
        };
    }, []);

    // 🔍 Find related movies from same genre
    let related = [];
    Object.values(moviesByGenre).forEach((list) => {
        if (list.find((m) => m.id === movie.id)) {
            related = list.filter((m) => m.id !== movie.id);
        }
    });

    return (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex justify-center items-start overflow-hidden">
            {/* MODAL CONTAINER */}
            <div
                className="
                    relative
                    bg-[#181818]
                    w-[90%]
                    max-w-5xl
                    max-h-[85vh]
                    mt-16
                    rounded-lg
                    shadow-2xl
                    overflow-y-auto
                "
            >
                {/* CLOSE BUTTON */}
                <button
                    onClick={() => {
                        document.body.style.overflow = "auto";
                        onClose();
                    }}

                    className="absolute top-4 right-4 text-white text-2xl z-20"
                >
                    ✕
                </button>

                {/* TRAILER SECTION */}
                {movie.trailer && (
                    <div className="w-full h-[360px] bg-black">
                        <iframe
                            src={`${movie.trailer}?autoplay=1&mute=0&controls=1&rel=0`}
                            title={movie.title}
                            allow="autoplay; encrypted-media"
                            className="w-full h-full"
                        />
                    </div>
                )}

                {/* INFO SECTION */}
                <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {movie.title}
                    </h2>

                    <p className="text-sm text-gray-300 mb-4">
                        {movie.description ||
                            "This is a featured title on Netflix with high audience engagement."}
                    </p>

                    <div className="flex items-center space-x-3 mb-8">
                        <button className="bg-white text-black px-6 py-2 rounded font-semibold">
                            ▶ Play
                        </button>
                        <button className="border border-gray-500 px-4 py-2 rounded">
                            + My List
                        </button>
                    </div>

                    {/* MORE LIKE THIS */}
                    {related.length > 0 && (
                        <Row title="More Like This" movies={related} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsModal;
