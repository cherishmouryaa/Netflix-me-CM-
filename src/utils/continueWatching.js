const KEY = "continueWatching"

export function saveProgress(movie, time = 30) {
    const list = JSON.parse(localStorage.getItem(KEY) || "[]")

    const updated = [
        { ...movie, progress: time },
        ...list.filter(m => m.id !== movie.id),
    ]

    localStorage.setItem(KEY, JSON.stringify(updated.slice(0, 10)))
}

export function getContinueWatching() {
    return JSON.parse(localStorage.getItem(KEY) || "[]")
}
