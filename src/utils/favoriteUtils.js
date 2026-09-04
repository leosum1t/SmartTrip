const FAVORITES_KEY = "smartyatra_favorites"

export function getFavorites() {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY)
    return savedFavorites ? JSON.parse(savedFavorites) : []
}

export function saveFavorite(destination) {
    const favorites = getFavorites()
    const alreadySaved = favorites.some((item) => item.id === destination.id)

    if (!alreadySaved) {
        const updatedFavorites = [...favorites, destination]
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
    }
}

export function removeFavorite(destinationId) {
    const favorites = getFavorites()
    const updatedFavorites = favorites.filter((item) => item.id !== destinationId)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
}

export function isFavorite(destinationId) {
    const favorites = getFavorites()
    return favorites.some((item) => item.id === destinationId)
}