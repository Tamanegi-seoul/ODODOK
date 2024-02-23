const Recommand = ({ bookList }) => {
  console.log('추천도서 리스트', bookList);
  function Book({ book }) {
    console.log('첫번째 도서', book);
    return (
      <div>
        <span>{book.no._text}</span>
        <p>{book.bookname._cdata}</p>
        <img src={book.bookImageURL._cdata}></img>
      </div>
    );
  }
  return (
    <div className="recommand">
      <h2 className="recommand__title">추천도서</h2>
      <div className="recommand__book-list">
        <Book book={bookList[0]}></Book>
        <Book book={bookList[1]}></Book>
        <Book book={bookList[2]}></Book>
      </div>
    </div>
  );
};

export default Recommand;
