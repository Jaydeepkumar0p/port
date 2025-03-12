import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 500px;
    background-color: ${({ theme }) => theme.card || '#fff'};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90%;
        min-height: 400px;
    }
`;
