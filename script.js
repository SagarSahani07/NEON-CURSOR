const neonCursor = document.getElementById('neon-cursor');

// Function to create trail effect
function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('neon-trail');
    document.body.appendChild(trail);
    
    // Set position of the trail
    trail.style.left = `${x - 10}px`;
    trail.style.top = `${y - 10}px`;
    
    // Remove the trail after animation
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

// Mouse movement event listener
document.addEventListener('mousemove', (e) => {
    // Set cursor position
    neonCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
    // Create trail effect at the current mouse position
    createTrail(e.clientX, e.clientY);
});

// Mouse over elements effect (optional)
document.addEventListener('mouseover', () => {
    neonCursor.style.width = '30px';
    neonCursor.style.height = '30px';
});

document.addEventListener('mouseout', () => {
    neonCursor.style.width = '20px';
    neonCursor.style.height = '20px';
});
