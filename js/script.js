// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Sample Books Data
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "fiction", available: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "fiction", available: true },
    { id: 3, title: "1984", author: "George Orwell", genre: "fiction", available: false },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "fiction", available: true },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "fiction", available: true },
    { id: 6, title: "A Brief History of Time", author: "Stephen Hawking", genre: "science", available: true },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", available: true },
    { id: 8, title: "Steve Jobs", author: "Walter Isaacson", genre: "biography", available: false },
    { id: 9, title: "The Diary of a Young Girl", author: "Anne Frank", genre: "biography", available: true },
    { id: 10, title: "Cosmos", author: "Carl Sagan", genre: "science", available: true }
];

// Load Books on Books Page
function loadBooks() {
    const booksGrid = document.getElementById('booksGrid');
    if (!booksGrid) return;

    const genreFilter = document.getElementById('genreFilter').value;
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';

    const filteredBooks = books.filter(book => {
        const matchesGenre = !genreFilter || book.genre === genreFilter;
        const matchesSearch = !searchTerm || 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm);
        return matchesGenre && matchesSearch;
    });

    booksGrid.innerHTML = filteredBooks.map(book => `
        <div class="book-card">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <span class="genre">${book.genre}</span>
            <div class="availability ${book.available ? 'available' : 'unavailable'}">
                ${book.available ? 'Available' : 'Checked Out'}
            </div>
        </div>
    `).join('');
}

// Search Books Function
function searchBooks() {
    loadBooks();
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Load books if on books page
    loadBooks();

    // Add event listeners for filters
    const genreFilter = document.getElementById('genreFilter');
    if (genreFilter) {
        genreFilter.addEventListener('change', loadBooks);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', loadBooks);
    }
});

// Add some CSS for availability status
const style = document.createElement('style');
style.textContent = `
    .availability {
        margin-top: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    .available {
        background: #d4edda;
        color: #155724;
    }
    .unavailable {
        background: #f8d7da;
        color: #721c24;
    }
`;
document.head.appendChild(style);