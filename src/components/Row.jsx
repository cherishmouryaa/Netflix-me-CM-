import { useState } from "react";
import { saveProgress } from "../utils/continueWatching";
import MovieDetailsModal from "./MovieDetailsModal";

function Row({ title, movies }) {
    const [hoveredId, setHoveredId] = useState(null);
    const [unmuted, setUnmuted] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    let hoverTimer;

    return (
        <>
            <div className="px-6 mb-14">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                <div className="flex space-x-4 overflow-x-scroll scrollbar-hide netflix-row">
                    {movies.map((movie) => {
                        const isHovered = hoveredId === movie.id;

                        return (
                            <div
                                key={movie.id}
                                className="relative min-w-[160px] h-[240px]"
                                onMouseEnter={() => {
                                    hoverTimer = setTimeout(() => {
                                        setHoveredId(movie.id);
                                        setUnmuted(false);
                                    }, 300);
                                }}
                                onMouseLeave={() => {
                                    clearTimeout(hoverTimer);
                                    setHoveredId(null);
                                }}
                            >
                                {/* BASE POSTER */}
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-full rounded object-cover transition-transform duration-300 hover:scale-105"
                                />

                                {/* CONTINUE WATCHING PROGRESS */}
                                {movie.progress !== undefined && (
                                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-gray-700 rounded">
                                        <div
                                            className="h-full bg-red-600 rounded"
                                            style={{ width: `${Math.min(movie.progress, 100)}%` }}
                                        />
                                    </div>
                                )}

                                {/* HOVER PREVIEW */}
                                {isHovered && movie.trailer && (
                                    <div
                                        className="
                      absolute 
                      -top-20 
                      -left-20
                      w-[320px]
                      bg-[#181818]
                      rounded-lg
                      shadow-2xl
                      z-50
                      overflow-hidden
                      animate-fadeIn
                    "
                                    >
                                        {/* TRAILER */}
                                        <div className="relative w-full h-[180px] bg-black">
                                            <iframe
                                                src={`${movie.trailer}?autoplay=1&mute=${unmuted ? 0 : 1
                                                    }&controls=0&modestbranding=1&rel=0`}
                                                title={movie.title}
                                                allow="autoplay; encrypted-media"
                                                className="w-full h-full pointer-events-none"
                                            />

                                            {/* MUTE */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setUnmuted(!unmuted);
                                                }}
                                                className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded"
                                            >
                                                {unmuted ? "🔊" : "🔇"}
                                            </button>
                                        </div>

                                        {/* INFO */}
                                        <div className="p-3">
                                            <h3 className="text-sm font-semibold mb-2">
                                                {movie.title}
                                            </h3>

                                            <div className="flex items-center space-x-3 mb-2">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        saveProgress(movie, 40);
                                                    }}
                                                    className="bg-white text-black text-xs px-4 py-1 rounded"
                                                >
                                                    ▶ Play
                                                </button>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedMovie(movie);
                                                    }}
                                                    className="border border-gray-500 text-white text-xs px-3 py-1 rounded"
                                                >
                                                    More Info
                                                </button>
                                            </div>

                                            <p className="text-xs text-gray-400">
                                                Action • Drama • Thriller
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MORE INFO MODAL */}
            <MovieDetailsModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />
        </>
    );
}

export default Row;
