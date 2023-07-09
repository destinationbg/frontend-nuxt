function useCoordinates(latitude: number, longitude: number, type: string) {
    if (type === 'dms') {
        // Convert the decimal latitude and longitude values into their degree, minute, and second equivalents
        const convertToDMS = (decimalValue: number, direction: string) => {
            const degrees = Math.floor(decimalValue)
            const minutes = Math.floor((decimalValue - degrees) * 60)
            const seconds = ((decimalValue - degrees - minutes / 60) * 3600).toFixed(1)

            return `${degrees}°${minutes.toString().padStart(2, '0')}'${seconds.toString().padStart(4, '0')}"${direction}`
        }

        const dmsLatitude = convertToDMS(latitude, 'N')
        const dmsLongitude = convertToDMS(longitude, 'E')

        // Concatenate the degree, minute, and second values with their corresponding direction
        return `${dmsLatitude} ${dmsLongitude}`
    } else {
        return `${latitude}, ${longitude}`
    }
}

export { useCoordinates }
