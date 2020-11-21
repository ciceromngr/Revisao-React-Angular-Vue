import styled from 'styled-components';
export const Container = styled.div`
/* overflow: hidden; */
font-family: Arial, Helvetica, sans-serif;

img {
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 600px;
    /* max-height: 700px; */
} 

@media (max-width: 767px) {
    img {max-width: 500px;}
}
@media (max-width: 400px) {
    img {max-width: 300px;}
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin-top: 150px; */
}
.main-tarefas {
    position: relative;
    margin-top: 50px;
    background: rgba(140,176,255,.4);
    padding: 26px;
    box-shadow: 2px 2px 4px rgba(0,0,0,.4),
                2px 2px 4px rgba(0,0,0,.1);
}
.tarefas {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
.painel-tarefas {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

b {
    color: #f4f4f4;
    font-weight: bold;
    font-size: 1.1rem;
    margin: 5px;
}
`