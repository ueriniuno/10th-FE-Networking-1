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

    let selectedIndex = null;

    categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'fieldTab-button';

        button.addEventListener('click', () => {
            
            if (selectedIndex !== index) {
                const buttons = fieldTab.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });

                button.classList.add('active');

                selectedIndex = index;
            }
        });
        fieldTab.appendChild(button);
    });
}
