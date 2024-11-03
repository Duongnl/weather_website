export const HandleTemperature = (kelvin?: number) => {
    if (kelvin === undefined) {
        return 'N/A'; // Hoặc có thể trả về một giá trị khác phù hợp, như 'Chưa có dữ liệu'
    }
    const celsius: number = kelvin - 273.15;
    return `${Math.round(celsius)}°`; // Làm tròn giá trị đến số nguyên
}