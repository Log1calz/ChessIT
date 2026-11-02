
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(title, message) {
    modalTitle.textContent = title;
    modalText.textContent = message;
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

// Main play button
document.getElementById("playBtn").addEventListener("click", () => {
    openModal(
        "Chessboard coming soon!",
        "Our interactive chessboard and computer opponents are being built in the next development step."
    );
});

// Learn button
document.getElementById("learnBtn").addEventListener("click", () => {
    document.getElementById("learn").scrollIntoView({
        behavior: "smooth"
    });
});

// Login button
document.getElementById("loginBtn").addEventListener("click", () => {
    openModal(
        "Accounts coming soon",
        "ChessIT accounts, player profiles and online features will be added later."
    );
});

// Game cards
document.querySelectorAll("[data-action]").forEach(button => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;

        const messages = {
            computer: [
                "Play vs Computer",
                "The chess engine and playable chessboard will be added in our next development steps."
            ],
            online: [
                "Online multiplayer",
                "Online matches and player matchmaking are planned for a later update."
            ],
            puzzles: [
                "Chess puzzles",
                "Tactical challenges, difficulty levels and puzzle ratings are coming soon."
            ],
            learn: [
                "Chess lessons",
                "Opening theory, tactics and endgame lessons are coming soon."
            ]
        };

        const message = messages[action];

        if (message) {
            openModal(message[0], message[1]);
        }
    });
});

// Modal controls
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalOkay").addEventListener("click", closeModal);

// Close when clicking outside the modal
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close with Escape key
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Sidebar active navigation
document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-item").forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
