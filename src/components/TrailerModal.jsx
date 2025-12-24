function TrailerModal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl aspect-video"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-xl"
                >
                    ✕
                </button>

                {movie.trailer ? (
                    <iframe
                        src={`${movie.trailer}?autoplay=1`}
                        title={movie.title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full rounded"
                    />
                ) : (
                    <div className="text-white text-center p-10">
                        Trailer not available
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrailerModal;
