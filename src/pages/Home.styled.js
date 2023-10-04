import styled from "styled-components";

export const MainHeadline = styled.h1`
  margin-bottom: 30px;
    margin-top: 20px;

`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

    a {
      text-decoration: none; 
    }
  }
`;

export const MovieLi = styled.li`
  margin-bottom: 5px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    color: red; 
  }
`;
