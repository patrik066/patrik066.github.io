fetch('get_images.py')
.then(response => response.json())
.then(data => {
    const gallery = document.getElementById('gallery');
    data.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('slika');
        const img = document.createElement('img');
        img.src = `Slike/Galerija/${image}`;
        img.alt = image;
        imgDiv.appendChild(img);
        gallery.appendChild(imgDiv);
    });
})
.catch(error => console.error('Error fetching images:', error));