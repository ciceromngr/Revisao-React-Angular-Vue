import styled from 'styled-components';


export const Container = styled.div`
img {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 200px;
    height: 200px;
}
ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

}
    li {
        border-radius: 5px;
        background: #f3f3f3;
        color: #7F68D2;
        text-decoration: none;
        font-weight: bold;
        width: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px; 
        transition: 0.4s;
        box-shadow:  2px 2px 6px rgba(255,255,255,0.02),
                     2px 2px 6px rgba(0,0,0,0.2);
        cursor: pointer;

        a , span{
            display:flex;
            justify-content: center;
            color: #7F68D2;
            text-decoration: none;
            width: 100%;
            height: 100%;
            padding: 0.3rem;
            align-items: center;
        }
    }

    li:active {
        box-shadow:  inset -2px -2px 6px rgba(255,255,255,0.05),
                    inset 2px 2px 6px rgba(0,0,0,0.5);
    }

    li:hover {
        background: rgba(255,255,255,0.05);

        a , span{
        color: #f3f3f3;
        }
    }
`