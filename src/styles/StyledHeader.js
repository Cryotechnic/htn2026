import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; /* Space between the buttons */
  align-items: center;
  position: fixed; /* Fix the header to the top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure the header is above other content */

  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between; /* Space between the buttons */
  }

  .navbar-left,
  .navbar-right {
    display: flex;
    gap: 10px;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    margin: 0; /* Remove margin from buttons */
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;