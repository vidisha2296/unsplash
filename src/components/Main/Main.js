import React from "react";
import "./Main.scss";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";

export default function Main() {
  return (
    <MainWrapper id="main">
      <div className="content">
        <div className="main-center">
          <h1 className="title">Unsplash</h1>
          <h3 className="description">
            The internet’s source of{" "}
            <a href="https://unsplash.com/license">freely-usable images.</a>
            <br />
            Powered by creators everywhere.
          </h3>
          <SearchBar />
        </div>
        <div className="main-footer">
          <p>
            <a href="https://www.google.com">Photo of the Day</a> by{" "}
            <a href="https://www.google.com">Zoltan Tasi</a>
          </p>
          <p>
            Read more about the{" "}
            <a href="https://www.google.com#">Unsplash Licence</a>
          </p>
          <p>
            <a href="https://www.google.com">
              See how imgix powers Unsplash imagery
            </a>
          </p>
        </div>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  background: url("https://source.unsplash.com/collection/220381/1600x900")
      no-repeat center/cover,
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
  background-blend-mode: overlay;
  width: 100%;
`;
