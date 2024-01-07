import { Link } from "react-router-dom";
import Editor from "../components/blockNote/blockNote";

export default function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      {/* blockNote 에디터 */}
      <Editor />
    </div>
  );
}
