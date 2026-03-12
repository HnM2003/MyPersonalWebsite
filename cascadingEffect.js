// 1. Select all the elements you want to animate
const animatedElements = document.querySelectorAll('h2, h3, details, p, a, strong');

// 2. Loop through the NodeList
animatedElements.forEach((element, index) => {
    // 3. Calculate the delay (e.g., 0.1 seconds per element)
    const delay = index * 0.1; 
    
    // 4. Apply the delay to the element's inline style
    element.style.animationDelay = `${delay}s`; 
});