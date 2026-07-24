// ---- Section navigation ----
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'flex';
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === sectionId);
    });

    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    // Wire up nav links (data-section attribute drives which section to show)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    // Show whichever section matches the URL hash on load, otherwise default to home
    const initialId = (location.hash || '#home').slice(1);
    showSection(document.getElementById(initialId) ? initialId : 'home');

    // ---- New portfolio announcement modal ----
    const modal = document.getElementById('newPortfolioModal');
    if (modal) {
        setTimeout(() => modal.classList.add('show'), 500);

        modal.querySelector('.close-btn').addEventListener('click', closeModal);

        // Clicking the dark backdrop (outside the modal box) also closes it
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }
});

function closeModal() {
    const modal = document.getElementById('newPortfolioModal');
    if (modal) modal.classList.remove('show');
}
