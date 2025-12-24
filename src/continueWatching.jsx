const KEY = "continueWatching"

export function addToContinueWatching(movie) {
    const existing = JSON.parse(localStorage.getItem(KEY)) || []

    if (!existing.find(m => m.id === movie.id)) {
        localStorage.setItem(KEY, JSON.stringify([movie, ...existing]))
    }
}

export function getContinueWatching() {
    return JSON.parse(localStorage.getItem(KEY)) || []
}
