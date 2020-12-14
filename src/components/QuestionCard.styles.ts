import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  background: #ebfeef;
  border-radius: 12px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border: 2px solid #0085a3;
  text-align: center;
  padding: 25px;

  p {
    font-size: 1rem;
  }
`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 44px;
    margin: 5px 0;
    border-radius: 12px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    background: ${({ correct, userClicked }) => 
      correct ? '#8fc296' : !correct && userClicked ? '#bf988c' : null}
  }
`