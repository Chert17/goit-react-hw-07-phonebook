import { ContainerStyle } from './Container.styled';

export function Container({ children }) {
  return (
    <>
      <ContainerStyle>{children}</ContainerStyle>
    </>
  );
}
