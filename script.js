
document.addEventListener("DOMContentLoaded", function() {
    
    const images = document.querySelectorAll('.photo-gallery .pic img');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');
    const prevButton = document.createElement('div');
    const nextButton = document.createElement('div');
    const description = document.getElementById('description');

    modal.classList.add('modal');
    prevButton.classList.add('prev');
    nextButton.classList.add('next');
    
    prevButton.textContent = '<';
    nextButton.textContent = '>';

    modal.appendChild(prevButton);
    modal.appendChild(modalImage);
    modal.appendChild(nextButton);
    document.body.appendChild(modal);

    let currentIndex = -1;
    let currentCategory = 'all';
    let currentCat = 'cats';
    let currentDog = 'dogs';
    let currentMonkey = 'monkeys'
    let filteredImages = filterImages();
    
    function showModal(index) {
        if (index < 0 || index >= filteredImages.length) return;
        currentIndex = index;
        modalImage.src = filteredImages[index].src;
        modal.style.display = 'flex';
        
        updateNavigationButtons();
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {

        if (currentIndex > 0) {
            showModal(currentIndex - 1);
        }
    }

    function showNextImage() {
        if (currentIndex < filteredImages.length - 1) {
            showModal(currentIndex + 1);
        }
    }

    function filterImages() {
        if (currentCategory === 'all') {
            return Array.from(images);
        }
        return Array.from(images).filter(img => img.parentElement.classList.contains(currentCategory));
    }
    function filterImages() {
        if (currentCat === 'cats') {
            return Array.from(images);
        }
        return Array.from(images).filter(img => img.parentElement.classList.contains(currentCat));
    }
    function filterImages() {
        if (currentDog === 'dogs') {
            return Array.from(images);
        }
        return Array.from(images).filter(img => img.parentElement.classList.contains(currentDog));
    }
    function filterImages() {
        if (currentMonkey === 'monkeys') {
            return Array.from(images);
        }
        return Array.from(images).filter(img => img.parentElement.classList.contains(currentMonkey));
    }

    function updateNavigationButtons() {
        prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
        nextButton.style.display = currentIndex < filteredImages.length - 1 ? 'block' : 'none';
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            filteredImages = filterImages();
            const imgIndex = filteredImages.indexOf(img);
            showModal(imgIndex);
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    prevButton.addEventListener('click', (event) => {
        event.stopPropagation();
        showPrevImage();
    });

    nextButton.addEventListener('click', (event) => {
        event.stopPropagation();
        showNextImage();
    });

    document.querySelectorAll('input[name="photos"]').forEach(input => {
        input.addEventListener('change', () => {
            currentCategory = document.querySelector('input[name="photos"]:checked').id.replace('check', '').toLowerCase();
            filteredImages = filterImages();
            currentIndex = -1; 
        });
    });
    });

setTimeout(() => {
    description.style.display = 'block';
}, 500);



