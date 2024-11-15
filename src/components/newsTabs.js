import { showAllNewsBrands } from "./gridView.js";
const allNewsArticles = [
    "전체 언론사 기사 1",
    "전체 언론사 기사 2",
    "전체 언론사 기사 3",
];

const subscribedNewsArticles = [
    "구독한 언론사 기사 1",
    "구독한 언론사 기사 2",
    "구독한 언론사 기사 3",
];


function updateGrid(articles) {
    const gridView = document.getElementById('gridView');
    gridView.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.textContent = article;
        articleDiv.classList.add('article');
        gridView.appendChild(articleDiv);
    });
    console.log('gridView:', gridView);
    
    showAllNewsBrands();
}

function updateMyGrid(articles) {
    const gridView = document.getElementById('gridView');
    gridView.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.textContent = article;
        articleDiv.classList.add('article');
        gridView.appendChild(articleDiv);
    });
    console.log('gridView:', gridView);
    if (gridView) {
        gridView.innerHTML = "구독 중인 언론사!!";
    } else {
        console.error("gridView 요소를 찾을 수 없습니다.");
    }
}


function updateButtonState(buttonId) {
    const buttons = document.querySelectorAll('#newsSection button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

document.getElementById('allNewsBtn').addEventListener('click', () => {
    const fieldTab = document.getElementById('fieldTab');
    fieldTab.style.display = 'none';
    
    updateGrid(allNewsArticles); // 전체 언론사
    updateButtonState('allNewsBtn');

});

document.getElementById('subNewsBtn').addEventListener('click', () => {
    updateMyGrid(subscribedNewsArticles); // 구독 언론사
    updateButtonState('subNewsBtn');
});


window.onload = () => {
    updateGrid(allNewsArticles); // 초기 로드 시 전체 언론사 콘텐츠 표시
    updateButtonState('allNewsBtn');
    showAllNewsBrands();
};
