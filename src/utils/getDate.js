export function getDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    const arr_day = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

    const day = arr_day[now.getDay()]; 

    const getNowDate = `${year}. ${month}. ${date}. ${day}`;

    return getNowDate;
}