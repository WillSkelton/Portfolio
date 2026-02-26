/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Header } from "./Header/Header";

const resumeRoot = css`
  width: "100vw";
  height: "100vh";

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 2px solid red;
`;

function Resume() {
  return (
    <div css={resumeRoot}>
      <Header />
    </div>
  );
}

export { Resume };
