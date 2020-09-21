import styled from "styled-components";

export const RowContainer = styled.div`
  color: #ffffff;
  margin-left: 2rem;
  margin-top: 1rem;
`;

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RowPoster = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 100px;
  margin-right: 0.8rem;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`;
