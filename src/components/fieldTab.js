export function createFieldTab() {
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

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'fieldTab button';

        fieldTab.appendChild(button);
    });
}
