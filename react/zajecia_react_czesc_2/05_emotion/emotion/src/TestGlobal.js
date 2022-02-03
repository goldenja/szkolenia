/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const color = 'white'

function TestGlobal () {

    return (
      <div>
      <Global
        styles={css`
          .some-class {
            color: hotpink !important;
          }
        `}
      />
      <Global
        styles={{
          '.some-class': {
            fontSize: 50,
            textAlign: 'center'
          }
        }}
      />
      <div className="some-class">This is hotpink now!</div>
    </div>);
}

export default TestGlobal;
