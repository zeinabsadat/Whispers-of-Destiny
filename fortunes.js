// List of life messages
const lifeList = [
    "Your journey ahead is full of growth and opportunities. Be open to change, and you will find success.",
    "The future shows a period of self-discovery for you. Trust your instincts, and you will gain clarity.",
    "In the coming months, you will form deep connections with others, bringing positivity and support into your life.",
    "A significant life change is on the horizon. Embrace it, as it will lead to a path of fulfillment and purpose.",
    "You are on the verge of unlocking your true potential. Keep your mind open, and new possibilities will unfold before you.",
    "The road ahead is filled with endless obstacles. It may feel like you're stuck for a long time.",
    "Your future looks uncertain. Many challenges will drain your energy, and it may feel like you're walking alone.",
    "You will face great disappointment in the coming days, and success will be far from reach.",
    "Your efforts will go unnoticed, and your goals will remain out of reach. Prepare for a long struggle.",
    "Beware of the coming storm in your life. You may find yourself in a situation where things fall apart unexpectedly."
];

// Get all life pictures and the lifeResult element
const lifePictures = document.querySelectorAll('.pictureHolder.life');
const lifeResult = document.getElementById('lifeResult');

// Function to pick a random life message
function lifeTeller() {
    let i = Math.floor(Math.random() * lifeList.length); // Randomly pick a message from the list
    return lifeList[i];
}

// Add event listeners to each life picture
lifePictures.forEach(picture => {
    picture.addEventListener('click', () => {
        // Remove the 'selected' class from all pictures
        lifePictures.forEach(p => p.classList.remove('selected'));

        // Add the 'selected' class to the clicked picture
        picture.classList.add('selected');

        // Get a random message and display it
        const message = lifeTeller();
        lifeResult.textContent = message; // Show the message in the lifeResult element
    });
});
