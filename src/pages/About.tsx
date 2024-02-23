import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function About() {
  return (
    <div>
      <StyledLink to="/">Landing</StyledLink>
      <StyledLink to="/home">Home</StyledLink>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
    </div>
  );
}

const StyledLink = styled(Link)`
  &:not(:fist-child) {
    margin-left: 20px;
  }
`;
