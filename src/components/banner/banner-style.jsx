import styled from "styled-components";

export const BannerContainer = styled.header`
  color: white;
  object-fit: contain;
  height: 45rem;
`;

export const BannerContents = styled.div`
  margin-left: 3rem;
  padding-top: 14rem;
  height: 19rem;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

export const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

export const BannerButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BannerFadeButton = styled.div`
  height: 26rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
