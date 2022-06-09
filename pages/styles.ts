import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    header {
        font-family: 'Kanit', sans-serif;;
        font-weight: 500;
        font-size: 1.5rem;
        text-shadow: 0px 0px 3.5em #FFFFFF;
    }

    main {
        form {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            input, button{
            display: block;
            color: #FFFFFF;

            padding: 10px;
            }

            input{
                width: 295px;
                border: 1px solid #1B1D20;
                background: #282A2D;

                height: 3rem;
                border-radius: 0.25rem;

                font-weight: 400;
                font-size: 1.5rem;
            }

            button {
                background: #7B61FF;

                height: 3rem;
                border-radius: 0.25rem;
                border: 0;
                font-size: 1rem;
                margin: 1rem 0;
                padding: 0 25px;
                font-weight: 600;

                transition: filter 0.2s;

                display: flex;
                align-items: center;
                justify-content: center;

                &:hover{
                    filter: brightness(0.9);
                }

                img {
                    width: 18px;
                    margin-left: 10px;
                }
            }

        }

        .resultConsult{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            margin-top: 1rem;

                p {
                width: 295px;
                text-align: center;

                padding: 5px;
                background-color: #e7f3ed;
                border-radius: 0.25rem;
                color: #198754;
                border: 1px solid #198754;
                }

                .cepError{
                    background-color: #fdf0f1;
                    color: #dc3545;
                    border: 1px solid #dc3545;
                }
    
                table{
                background-color: rgba(40,42,45,0.6);
                border: 1px solid #FFFFFF;
                border-collapse: collapse;
                border-radius: 0.5rem;

                width: 295px;
                margin-top: 16px;
                    tbody {
                        tr {
                            th{
                                border: 1px solid #FFFFFF;
                                padding: 8px;
                            }
                            td {
                                border: 1px solid #FFFFFF;
                                padding: 8px;
                                text-align: center;
                            }
                        }
                    }
                }
            }

    }

    footer{
        width: 160px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        border-radius: 0.75rem;
        background-color: rgba(40,42,45,0.5);

        padding: 5px;
        margin-top: 2rem;

        p{
            color: #e0e0e0;
            font-size: 0.92rem;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .socialLinks{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .svg{
            width: 35px;
            display: block;
        }

        .github{
                border-radius: 50%;
                background-color: rgba(40,42,45,0.8);
            #github:hover{
                fill: #FFFFFF;
                transition: 1s;
            }
        }

        .likedin{
            border-radius: 0.50rem;
            background-color: rgba(40,42,45,0.8);


            #likedin:hover{
                fill: #FFFFFF;
                transition: 1s;
            }
        }

        .instagram{
            border-radius: 0.75rem;
            background-color: rgba(40,42,45,0.8);


            #instagram:hover{
                fill: #FFFFFF;
                transition: 1s;
            }
        }
        }

    }

`

export default Container;
