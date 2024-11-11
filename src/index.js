import { header } from "./components/header.js"
import { AutoRollingNews } from "./components/rolling.js";
import { createfieldTab } from "./components/fieldTab.js";

header();
createfieldTab();

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

        const leftArticles = articlesLeft.slice(0, 5);
        const rightArticles = articlesRight.slice(0, 5);

        AutoRollingNews(leftArticles, rightArticles);
    })
    .catch(error => console.error("Error loading JSON data:", error));
