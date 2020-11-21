import styled from 'styled-components';


export const Container = styled.div`
h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    margin: auto;
    padding: 5px;
    color: #f3f3f3;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

form {
    display: flex;
    justify-content: center;
}

form input {
    padding: 0.4rem;
    outline: none;
    border: none;
}

form button {
    width: 3.5rem;
    border: none;
    background: linear-gradient(to right, #4b6cb7, #182848);
    color: #f3f3f3;
    font-weight: bold;
}
.informacoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 4px #0002;
    background: linear-gradient(to right, #4b6cb7, #182848);
    width: 14rem;
    margin: auto;
    padding: 10px;
    color: #f3f3f3;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
`