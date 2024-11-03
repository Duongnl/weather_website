export const HandleVisibility = (visibility?: number) => {
    if (visibility == undefined) {
        return "N/A"
    }

    return visibility / 1000 + " km"; // Làm tròn giá trị đến số nguyên
}