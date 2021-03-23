import apiClient from "./client";
/*import CryptoJS from 'crypto-js/aes';*/

const endpoint = '/V1/key';

const encryptionApi = () => apiClient.get(endpoint);


export default {
    encryptionApi,
}
