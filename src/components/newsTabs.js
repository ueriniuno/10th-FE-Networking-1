
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
}


document.getElementById('allNewsBtn').addEventListener('click', () => {
    updateGrid(allNewsArticles); // 전체 언론사
});

document.getElementById('subNewsBtn').addEventListener('click', () => {
    updateGrid(subscribedNewsArticles); // 구독 언론사
});


window.onload = () => {
    updateGrid(allNewsArticles); // 초기 로드 시 전체 언론사 콘텐츠 표시
};
