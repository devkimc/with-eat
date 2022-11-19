import React from 'react';
import styled from 'styled-components';

const ConfirmModal = () => {
    return (
        <ConfirmModalBlock>
            <Modal>
                <Input placeholder="인증코드를 입력해주세요." />
                <Button confirm>확인</Button>
                <Button confirm={false}>취소</Button>
            </Modal>
        </ConfirmModalBlock>
    );
};

const ConfirmModalBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.div`
    margin: auto;
    width: 20rem;
    height: 12.3rem;
    background-color: white;
    padding: 1rem;
    border-radius: 1.2rem;
    box-shadow: rgb(0 0 0 / 30%) 0.625rem 0.625rem 0.625rem;
`;

const Input = styled.input`
    width: 100%;
    outline: none;

    font-size: 0.9rem;
    font-family: 'AppleSDGothicNeoB';
    box-shadow: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 20%);
    border: 0.063rem solid #dedede;
    background-color: #fff;
    padding: 0.875rem 2rem;
    border-radius: 1.75rem;
`;

const Button = styled.button`
    width: 100%;
    cursor: pointer;

    font-size: 0.9rem;
    font-family: 'AppleSDGothicNeoB';
    background-color: ${props =>
        props.confirm ? 'rgba(30, 185, 69, 0.12)' : 'rgba(206, 29, 29, 0.12)'};
    border: ${props =>
        props.confirm ? 'rgba(30, 185, 69, 0.24)' : 'rgba(206, 29, 29, 0.24)'};
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 10%);
    padding: 0.875rem 2rem;
    border-radius: 1.75rem;
    transition: all 0.2s ease;
    margin-top: 0.5rem;
`;

export default ConfirmModal;
