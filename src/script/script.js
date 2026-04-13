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
  let message = "The list of books:\n";
  let number = 0;
  books.forEach((book) => {
    number++;
    message += `${number}. ${book.title} - ${book.author}. ${book.isRead ? "Read" : "Not Read"}.\n`;
  });
  console.log(message);
}

function removeBook(remove) {
  const found = books.find(
    ({ title }) => title.toLocaleLowerCase() === remove.toLocaleLowerCase(),
  );
  if (found) {
    books = books.filter(
      (book) => book.title.toLocaleLowerCase() !== remove.toLocaleLowerCase(),
    );
    alert(`"${found.title}" has been removed!`);
  } else {
    alert(`Couldn't find a book called: "${remove}"`);
  }
}

function listUnreadBooks() {
  let unreadBooks = [];
  let number = 0;
  let message = "Here are your unread books:\n";
  books.forEach((book) => {
    if (book.isRead === false) {
      unreadBooks.push(book);
    }
  });
  if (unreadBooks.length > 0) {
    unreadBooks.forEach((book) => {
      number++;
      message += `${number}. ${book.title} - ${book.author}\n`;
    });
    console.log(message);
  } else {
    alert("You have no unread books!");
  }
}

function markAsRead(title) {
  let found = false;
  books.forEach((book) => {
    if (title.toLowerCase() === book.title.toLowerCase()) {
      book.isRead = true;
      found = true;
      alert(`"${book.title}" is marked as read!`);
    }
  });
  if (!found) {
    alert(`Couldn't find a book called: ${title}`);
  }
}

let running = true;

while (running) {
  const choice = prompt(`
      📚 Book Tracker
      1. Add Book
      2. List Books
      3. Mark Book as Read
      4. Remove Book
      5. List Unread Books
      6. Exit
      Enter your choice:
    `);

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBooks();
      break;
    case "3": {
      const title = prompt("Enter the title of the book to mark as read:");
      markAsRead(title);
      break;
    }
    case "4": {
      const remove = prompt("Which book would you like to remove?");
      removeBook(remove);
      break;
    }
    case "5":
      listUnreadBooks();
      break;
    case "6":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice.");
  }
}
