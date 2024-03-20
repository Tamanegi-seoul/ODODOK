import { Link } from 'react-router-dom';
import Editor from '@/components/blockNote/blockNote';
// import EditorComponent from "../components/editorJS/EditorComponent";

export default function Write() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <h1>글 작성 페이지</h1>
      <p>글 작성 페이지입니다.</p>

      {/* blockNote 에디터 */}
      <Editor />
    </div>
  );
}
