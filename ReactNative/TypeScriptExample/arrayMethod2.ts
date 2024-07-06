
interface Book {
    title: string;
    genre: "fiction" | "non-fiction" | "educational";
    price: number;
  }
  
  const books: Book[] = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
  ];

  const findTypeBook = (books:Book[]):Book[] => {
    return books
      .filter((props)=>props.genre==="fiction"&&props.price>300)
      .map((data)=>({...data,price:data.price*0.9}))
  }

  let total = findTypeBook(books)
  console.log(total);
  