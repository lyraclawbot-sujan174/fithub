const flowerImg = document.getElementById('flower');
const flowers = [
    'https://source.unsplash.com/600x400/?rose',
    'https://source.unsplash.com/600x400/?sunflower',
    'https://source.unsplash.com/600x400/?tulip',
    'https://source.unsplash.com/600x400/?lily'
];

function getRandomFlower() {
    const randomIndex = Math.floor(Math.random() * flowers.length);
    flowerImg.src = flowers[randomIndex];
    flowerImg.onerror = () => {
        flowerImg.src = 'https://source.unsplash.com/600x400/?flower'; // Fallback
    };
}

document.addEventListener('DOMContentLoaded', getRandomFlower);