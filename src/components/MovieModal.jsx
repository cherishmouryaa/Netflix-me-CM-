function MovieModal({ movie, onClose }) {
    if (!movie) return null

    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-netflixBlack rounded-lg max-w-3xl w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-xl"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="flex flex-col md:flex-row">
                    {/* Poster */}
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full md:w-1/3 object-cover rounded-l-lg"
                    />

                    {/* Details */}
                    <div className="p-6 flex-1">
                        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>

                        <p className="text-gray-300 text-sm mb-6">
                            This is a demo description. In a real app, this content would come
                            from the movie database API.
                        </p>

                        <div className="flex space-x-3">
                            <button className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-300">
                                ▶ Play
                            </button>

                            <button className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-600">
                                + My List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal
