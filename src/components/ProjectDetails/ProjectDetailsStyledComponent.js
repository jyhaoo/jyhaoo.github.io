import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

export const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

export const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

export const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  padding: 12px 16px;
  border-radius: 8px;
  border: 1.8px solid ${({ theme }) => theme.secondary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.secondary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
