import { header } from "./components/header.js"
import { AutoRollingNews } from "./components/rolling.js";
import { createfieldTab } from "./components/fieldTab.js";

header();
createfieldTab();

const leftArticles = [
    "기사 제목 1", 
    "기사 제목 2", 
    "기사 제목 3", 
    "기사 제목 4", 
    "기사 제목 5"
];

const rightArticles = [
    "기사 제목 6", 
    "기사 제목 7", 
    "기사 제목 8", 
    "기사 제목 9", 
    "기사 제목 10"
];

AutoRollingNews(leftArticles, rightArticles);