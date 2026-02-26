/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import { colors } from "../Theme";
import type { ReactNode } from "react";

const classes = {
  sectionRoot: css`
    width: 100%;

    margin-bottom: 8px;
  `,

  divider: css`
    border-bottom-color: ${colors.black};
  `,

  infoContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};

interface MainSectionProps {
  title: string;
  left: string;
  center: string;
  right: string;
  children: ReactNode;
}

function MainSection({
  title,
  left,
  center,
  right,
  children,
}: MainSectionProps) {
  return (
    <div css={classes.sectionRoot}>
      <Typography variant="h1">{title}</Typography>
      <Divider css={classes.divider} />
      <div css={classes.infoContainer}>
        <Typography variant="body2">{left}</Typography>
        <Typography variant="body2">{center}</Typography>
        <Typography variant="body2">{right}</Typography>
      </div>

      <div>{children}</div>
    </div>
  );
}

export { MainSection };
