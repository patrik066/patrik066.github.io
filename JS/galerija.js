document.addEventListener('DOMContentLoaded', () => {
    const imageFolder = 'Slike/Galerija/';
    const images = [
        'slika1.jpg',
        'slika2.jpg',
        'slika3.jpg',
        'slika4.jpg',
        'slika5.jpg',
        'slika6.jpg',
        'slika7.jpg',
        'slika8.jpg',
        'slika9.jpg'
        // Add more filenames as needed
    ];

    const galerijaDiv = document.getElementById('galerija');

    images.forEach(image => {
        const slikaDiv = document.createElement('div');
        slikaDiv.classList.add('slika');
        const img = document.createElement('img');
        img.src = `${imageFolder}${image}`;
        img.alt = image;
        slikaDiv.appendChild(img);
        galerijaDiv.appendChild(slikaDiv);
    });
});
