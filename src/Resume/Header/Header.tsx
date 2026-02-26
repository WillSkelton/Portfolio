/** @jsxImportSource @emotion/react */
import { Link, Typography } from "@mui/material";
import { css } from "@emotion/react";

const classes = {
  headerRoot: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,

  contactInfoContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,

  contactInfo: css`
    margin-left: 8px;
  `,
};

function Header() {
  return (
    <div css={classes.headerRoot}>
      <Typography variant="h1">William Skelton</Typography>

      <div css={classes.contactInfoContainer}>
        <Link
          variant="body2"
          css={classes.contactInfo}
          href="mailto:willskelton@email.com"
        >
          willskelton@email.com
        </Link>
        <Typography variant="body2" css={classes.contactInfo}>
          |
        </Typography>
        <Link
          css={classes.contactInfo}
          variant="body2"
          target="_blank"
          href="https://github.com/willskelton"
        >
          github.com/willskelton
        </Link>
        <Typography variant="body2" css={classes.contactInfo}>
          |
        </Typography>
        <Link
          css={classes.contactInfo}
          variant="body2"
          target="_blank"
          href="https://linkedin.com/in/william-skelton"
        >
          linkedin.com/in/william-skelton
        </Link>
      </div>

      <Typography>City, State</Typography>
      <Typography>(123) 456-7890</Typography>
    </div>
  );
}

export { Header };
