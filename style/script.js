const img = document.querySelector('.img-interactiva');

img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((offsetX - centerX) / centerX) * 15;  
    const rotateX = ((centerY - offsetY) / centerY) * 15;  

    const translateX = ((offsetX - centerX) / centerX) * 10; 
    const translateY = ((offsetY - centerY) / centerY) * 10; 

    img.style.transform = `
        perspective(600px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
        scale(1.05)
    `;
});

img.addEventListener('mouseleave', () => {
    img.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)';
});