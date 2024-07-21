document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#007BFF', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    const currentColor = this.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    // Ensure the new color is different from the current color
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    this.style.backgroundColor = newColor;
});
