/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

const Heading = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
  font-size: 22px;
`;

function TestTheme () {
    return (
      <Heading bg="#008f68" fg="#fae042">
        This has a hotpink background.
      </Heading>);
}

export default TestTheme;
