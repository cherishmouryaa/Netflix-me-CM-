import Navbar from "../components/Navbar";
import Row from "../components/Row";
import { moviesByGenre } from "../data/movieCatalog";

function Kids() {
    return (
        <div className="bg-netflixBlack min-h-screen pt-24">
            <Navbar onSearch={() => { }} />
            <Row title="Kids Movies" movies={moviesByGenre.kids} />
        </div>
    );
}

export default Kids;
