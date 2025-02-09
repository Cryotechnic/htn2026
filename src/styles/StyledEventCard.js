import styled from 'styled-components';

export const StyledProjectCard = styled.div`
    padding: 1.5rem 1rem 1rem;
    min-height: 100%;

`;

export const StyledEventModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 1050; /* Ensures modal is on top of other content */
    display: flex; /* Flex to center content */
    justify-content: center;
    align-items: center;

    .modal-dialog {
      max-width: 500px; /* Optional: Define a maximum width for the modal */
      width: 100%; /* Ensure it takes up the full available width within max-width */
    }
`;