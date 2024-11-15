const allNewsBrands = [];
const allMediaImages = [];

for (let i = 1; i <= 24; i++) {
    const imagePath = `./src/assets/images/asset${i}.png`;
    allNewsBrands.push(`asset${i}.png`);
    allMediaImages.push(imagePath);
    console.log(`Image path added: ${imagePath}`);
}


function showFieldTab() {
    const fieldTab = document.getElementById('fieldTab');
    fieldTab.style.display = 'block';
}


// function handleImageClick(image) {
//     const gridView = document.getElementById('gridView');
//     const fieldTab = document.getElementById('fieldTab');
    
//     gridView.innerHTML = '';

//     showFieldTab();
// }

function updateGridWithBrands(articles) {
    const gridView = document.getElementById('gridView');

    if (!gridView) {
        console.error('gridView not found!');
        return;
    }

    gridView.innerHTML = ''; // 기존 콘텐츠 제거

    articles.forEach(image => {
        const cell = document.createElement('div'); // 그리드뷰 경계선 생성하기 위해 추가한 것

        const img = document.createElement('img');
        img.src = `src/assets/images/${image}`;
        img.alt = image;
        img.classList.add('press-image'); // 스타일을 위한 클래스 추가
        
        cell.appendChild(img);
        gridView.appendChild(cell); // gridView에 이미지 추가


        img.addEventListener('click', () => {
            gridView.innerHTML = '';
            showFieldTab();
        });

    });
}


const images = document.querySelectorAll('.press-image');
images.forEach(image => {
    image.addEventListener('click', () => {
        showFieldTab();
    });
});


export function showAllNewsBrands() {
    updateGridWithBrands(allNewsBrands);
}

document.getElementById('allNewsBtn').addEventListener('click', showAllNewsBrands);