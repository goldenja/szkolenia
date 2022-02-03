/** @jsxImportSource @emotion/react */
import { jsx, useTheme } from '@emotion/react'

const color = 'white'

function TestTheme () {
    const theme = useTheme();


    return (
      <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: theme.colors.primary
        }
      }}
    >
      This has a hotpink background.
    </div>);
}

export default TestTheme;
