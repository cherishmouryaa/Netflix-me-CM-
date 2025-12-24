import { useState } from "react";

function Banner() {
    const [unmuted, setUnmuted] = useState(false);

    // Pick one featured movie (can be dynamic later)
    const bannerMovie = {
        title: "The Dark Knight",
        description:
            "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent.",
        backdrop:
            "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    };

    return (
        <header className="relative h-[60vh] text-white">
            {/* VIDEO BACKGROUND */}
            <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={`${bannerMovie.trailer}?autoplay=1&mute=${unmuted ? 0 : 1
                    }&controls=0&loop=1&playlist=EXeTwQWrcwY&modestbranding=1&rel=0`}
                title={bannerMovie.title}
                allow="autoplay; encrypted-media"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* CONTENT */}
            <div className="relative z-10 px-8 pt-40 max-w-xl">
                <h1 className="text-4xl font-bold mb-4">
                    {bannerMovie.title}
                </h1>

                <p className="text-sm mb-6 line-clamp-3">
                    {bannerMovie.description}
                </p>

                <div className="flex items-center space-x-3">
                    <button className="bg-white text-black px-6 py-2 rounded font-semibold">
                        ▶ Play
                    </button>

                    <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded font-semibold">
                        More Info
                    </button>

                    <button
                        onClick={() => setUnmuted(!unmuted)}
                        className="ml-4 bg-black bg-opacity-70 px-3 py-2 rounded"
                    >
                        {unmuted ? "🔊" : "🔇"}
                    </button>
                </div>
            </div>

            {/* BOTTOM FADE */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#141414] to-transparent" />
        </header>
    );
}

export default Banner;
