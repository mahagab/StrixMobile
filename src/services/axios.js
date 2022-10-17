import axios from  'axios';

const endpoint = `http://listmanagerrm84543.eastus.azurecontainer.io:8080/api/task`;

export const api = axios.create({
  baseURL: endpoint,
});