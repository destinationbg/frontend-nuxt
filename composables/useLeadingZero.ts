function leadingZero(num: number, places: number) {
    return String(num).padStart(places, '0')
}

export { leadingZero }
