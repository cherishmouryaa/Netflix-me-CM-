import { useState } from "react"
import { getContinueWatching } from "../utils/continueWatching"
import Row from "./Row"

function ContinueWatchingRow() {
    const [movies] = useState(() => getContinueWatching())

    if (movies.length === 0) return null

    return <Row title="Continue Watching" movies={movies} />
}

export default ContinueWatchingRow
