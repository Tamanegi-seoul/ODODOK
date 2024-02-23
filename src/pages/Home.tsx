import { Link } from 'react-router-dom';
import Recommand from '../components/Recommand';
import { useEffect } from 'react';

export default function Home(props: object) {
  // console.log("bookList", props.bookList);
  // const bookList = props.bookList?.docs.doc;
  // console.log("bookList", bookList);
  return (
    <div className="home">
      {/* 메뉴 */}
      <div className="home__menu">
        <Link to="/">Landing</Link>
        <Link to="/about">About</Link>
        <Link to="/write">Write</Link>
      </div>

      {/* 타이틀 */}
      <h1 className="home__title">Home</h1>
      <p className="home__disc">가장 먼저 보여지는 페이지입니다.</p>

      {/* 컨텐츠 */}

      {/* 추천도서 */}
      {/* <Recommand bookList={bookList} /> */}
    </div>
  );
}
