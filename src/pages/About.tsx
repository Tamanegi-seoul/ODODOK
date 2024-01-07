import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
    </div>
  );
}
