let books = [
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    isRead: true,
  },
  {
    title: "Everyone in My Family Has Killed Someone",
    author: "Benjamin Stevenson",
    isRead: false,
  },
  {
    title: "Everyone on This Train Is a Suspect",
    author: "Benjamin Stevenson",
    isRead: false,
  },
  {
    title: "A Death in the Parish",
    author: "Richard Coles",
    isRead: false,
  },
  {
    title: "Over my dead body",
    author: "Maz Evans",
    isRead: false,
  },
];

function addBook() {
  const title = prompt("Enter the book title");
  const author = prompt("Enter book author");
  books.push({
    title: title,
    author: author,
    isRead: false,
  });
}

function listBooks() {
  console.log("Here is the list of books.");
}

function markAsRead(title) {
  console.log(title);
}

let running = true;

while (running) {
  const choice = prompt(`
      📚 Book Tracker
      1. Add Book
      2. List Books
      3. Mark Book as Read
      4. Exit
      Enter your choice:
    `);

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBooks();
      break;
    case "3":
      const title = prompt("Enter the title of the book to mark as read:");
      markAsRead(title);
      break;
    case "4":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice.");
  }
}
