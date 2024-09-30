import { getDate } from "../utils/getDate.js";
export function header() {
    console.log("Header function is being executed");


    const leftSection = document.getElementById("header-left");
    const rightSection = document.getElementById("header-right");

    const icon = document.createElement("img");
    icon.src = "./src/assets/images/icon.png"
    icon.alt = "Icon";
    leftSection.appendChild(icon);
    
    const title = document.createElement("h1");
    title.textContent = "뉴스스탠드";
    leftSection.appendChild(title);

    const getCurrentDate = document.createElement("div");
    getCurrentDate.textContent = getDate(new Date());
    rightSection.appendChild(getCurrentDate);
    
};