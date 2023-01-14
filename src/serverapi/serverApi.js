import axios from "axios";

export const GET_MEMO_LIST = '/memo/search';
export const PUT_MEMO_ITEM = '/memo/insert';

export const addMemo = async(sendData) => {
    return await send(PUT_MEMO_ITEM, sendData);
}

export const getMemoList = async(sendData) => {
    // return await send(GET_MEMO_LIST, sendData);
    return await getSend(GET_MEMO_LIST);
}

const getSend = async(url) => {
    let response;

    await axios.get(url, {withCredentials: true}).then(res =>{
        response = res;
    })

    return response;
}

const send = async (url, sendData) => {
    let response;

    await axios.post(url, sendData, {withCredentials: true}).then(res => {
        response = res;
    });

    return response;
}