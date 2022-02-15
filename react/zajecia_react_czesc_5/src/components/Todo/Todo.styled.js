import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border-radius: 4px;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: green;
    transform: ${props => `scaleX(${props.completed ? 1 : 0})`};
    transition: transform 250ms ease-in-out;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  margin: 0;
  border: none;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: teal;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: tomato;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
