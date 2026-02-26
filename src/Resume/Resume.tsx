/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Header } from "./Header/Header";
import { MainSection } from "../Common/MainSection";

const resumeRoot = css`
  width: "100vw";
  height: "100vh";

  padding: 0px 12px;

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

      <MainSection
        title="Education"
        left="B.S. in Computer Science"
        center="Washington State University"
        right="Graduated May 2022"
      >
        Yeet
      </MainSection>
    </div>
  );
}

export { Resume };
