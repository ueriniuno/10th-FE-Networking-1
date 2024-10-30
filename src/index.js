import { header } from "./components/header.js"
import { AutoRollingNews } from "./components/rolling.js";
import { createfieldTab } from "./components/fieldTab.js";

header();
createfieldTab();

// const leftArticles = [
//     "기사 제목 1", 
//     "기사 제목 2", 
//     "기사 제목 3", 
//     "기사 제목 4", 
//     "기사 제목 5"
// ];

// const rightArticles = [
//     "기사 제목 6", 
//     "기사 제목 7", 
//     "기사 제목 8", 
//     "기사 제목 9", 
//     "기사 제목 10"
// ];

// AutoRollingNews(leftArticles, rightArticles);

// './src/data/rollingNews.json'
fetch('./src/data/rollingNews.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        const articlesLeft = data.headline1.map(article => ({
            press: article.press,
            title: article.title
        }));
        // const articlesRight = data.headline2.map(article => `${article.press} ${article.title}`);
        const articlesRight = data.headline2.map(article => ({
            press: article.press,
            title: article.title
        }));

        console.log("Left Articles:", articlesLeft);  // 확인을 위해 출력
        console.log("Right Articles:", articlesRight); // 확인을 위해 출력

        const leftArticles = articlesLeft.slice(0, 5);
        const rightArticles = articlesRight.slice(0, 5);

        AutoRollingNews(leftArticles, rightArticles);
    })
    .catch(error => console.error("Error loading JSON data:", error));
