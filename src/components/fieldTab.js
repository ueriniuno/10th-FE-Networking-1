export function createfieldTab() {
    const categories = [
        "종합/경제", 
        "방송/통신", 
        "IT", 
        "영자지", 
        "스포츠/연예", 
        "매거진/전문지", 
        "지역"
    ];

    const fieldTab = document.getElementById('fieldTab');
    let selectedIndex = 0;
    let timer;

    // 카테고리 버튼 생성
    categories.forEach((category, index) => {
        const button = document.createElement('button');
        const categoryName = document.createElement('span');
        categoryName.textContent = category;
        // button.textContent = category;

        button.appendChild(categoryName);
        button.className = 'fieldTab-button';
        
        button.addEventListener('click', () => {
            clearInterval(timer); // 클릭 시 기존 타이머 초기화
            startProgress(index); // 클릭한 카테고리에서 프로그레스 시작
        });
        
        fieldTab.appendChild(button);
    });

    // 카테고리 이동 및 프로그레스 진행
    function startProgress(index) {
        const buttons = fieldTab.querySelectorAll('button');
        
        // 이전 버튼 비활성화
        buttons[selectedIndex].classList.remove('active');
        
        // 새로운 버튼 활성화
        selectedIndex = index;
        buttons[selectedIndex].classList.add('active');
        
        // 20초 후에 다음 카테고리로 자동 전환
        clearInterval(timer); // 기존 타이머 클리어
        timer = setInterval(() => {
            const nextIndex = (selectedIndex + 1) % categories.length; // 다음 카테고리로 순차적으로 넘어가게
            startProgress(nextIndex); // 다음 카테고리로 프로그레스 시작
        }, 20000); // 20초 간격으로 실행
    }

    // 페이지 로드 시 첫 번째 카테고리 자동 시작
    startProgress(0); // 첫 번째 카테고리부터 시작
}

export default createfieldTab;
