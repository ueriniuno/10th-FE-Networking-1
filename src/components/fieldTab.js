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

     fieldTab.style.display = 'none';


    categories.forEach((category, index) => {
        const button = document.createElement('button');
        const categoryName = document.createElement('span');
        categoryName.textContent = category;
        // button.textContent = category;

        button.appendChild(categoryName);
        button.className = 'fieldTab-button';
        
        button.addEventListener('click', () => {
            clearInterval(timer); //클릭 시 타이머 초기화
            startProgress(index);
        });
        
        fieldTab.appendChild(button);
    });


    function startProgress(index) {
        const buttons = fieldTab.querySelectorAll('button');
        
        //이전 버튼 삭제=비활성화
        buttons[selectedIndex].classList.remove('active');
        
        //새로운 버튼 활성화
        selectedIndex = index;
        buttons[selectedIndex].classList.add('active');
        

        clearInterval(timer);
        timer = setInterval(() => {
            const nextIndex = (selectedIndex + 1) % categories.length;
            startProgress(nextIndex);
        }, 20000);
    }


    startProgress(0);
}

export default createfieldTab;
