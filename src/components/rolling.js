export function AutoRollingNews(articlesLeft, articlesRight) {
    const rollingBarLeft = document.querySelector('#rollingBar-left ul');
    const rollingBarRight = document.querySelector('#rollingBar-right ul');

    articlesLeft.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article;
        rollingBarLeft.appendChild(li);
    });

    articlesRight.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article;
        rollingBarRight.appendChild(li);
    });

    let currentIndexLeft = 0;
    let currentIndexRight = 0;

    function showNextArticle(rollingBar, currentIndex, displayTime) {
        const items = rollingBar.children;
        if (items.length > 0) {
            // 현재 항목을 보이게 하고, 다음 인덱스로 넘어감
            items[currentIndex].classList.add('visible'); // 보이게 설정

            // 대기 시간 후 사라지도록 설정
            setTimeout(() => {
                items[currentIndex].classList.add('roll');
                
                // 0.3초 후에 항목 안 보이게 함
                setTimeout(() => {
                    items[currentIndex].classList.remove('visible'); // 안보이게 설정
                    items[currentIndex].classList.remove('roll'); // 롤링 효과 제거
                    currentIndex = (currentIndex + 1) % items.length; // 다음 항목

                    // 다음 항목을 보여줌 = 재귀 호출
                    showNextArticle(rollingBar, currentIndex, displayTime);
                }, 300); // 롤링 효과가 끝난 후 0.3초동안 대기 
            }, displayTime);
        }
    }


    showNextArticle(rollingBarLeft, currentIndexLeft, 5000);
    setTimeout(() => {
        showNextArticle(rollingBarRight, currentIndexRight, 5000); // 오른쪽은 1초 후에 시작하게 하여 차이를 둠
    }, 1000);
}
