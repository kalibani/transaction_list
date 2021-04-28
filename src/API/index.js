import axios from 'axios';

const baseUrl = 'https://nextar.flip.id/frontend-test';

const getTransactions = () => axios.get(baseUrl);

export default getTransactions;
