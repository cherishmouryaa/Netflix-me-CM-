import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import ContinueWatchingRow from "../components/ContinueWatchingRow";
import { moviesByGenre } from "../data/movieCatalog";

function Browse() {
    const [search, setSearch] = useState("");

    const allMovies = Object.values(moviesByGenre).flat();
    const searchedMovies = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-netflixBlack min-h-screen pt-24">
            <Navbar onSearch={setSearch} />
            <Banner />

            {search ? (
                <Row title="Search Results" movies={searchedMovies} />
            ) : (
                <>
                    <ContinueWatchingRow />
                    <Row title="Telugu Blockbusters" movies={moviesByGenre.telugu} />
                    <Row title="Hollywood Hits" movies={moviesByGenre.english} />
                    <Row title="Action Movies" movies={moviesByGenre.action} />
                    <Row title="Drama Classics" movies={moviesByGenre.drama} />
                    <Row title="Crime & Gangster" movies={moviesByGenre.crime} />
                    <Row title="Thriller & Suspense" movies={moviesByGenre.thriller} />
                    <Row title="Comedy Movies" movies={moviesByGenre.comedy} />
                    <Row title="Fantasy & Epic" movies={moviesByGenre.fantasy} />
                    <Row title="Popular Web Series" movies={moviesByGenre.series} />
                </>
            )}
        </div>
    );
}

export default Browse;
