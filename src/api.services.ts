import axios from 'axios';
import { AUTH_TOKEN } from './token';

const apiClient = axios.create({
  headers: {
    Authorization: 'Bearer ' + AUTH_TOKEN,
  },
});
export async function getMenuCategories() {
  try {
    const response = await apiClient.get(
      'https://certain-boot-69d68e2fb4.strapiapp.com/api/categories?populate=sub_categories'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getMenuProduct(id: number) {
  try {
    const apiRequestUrl = `https://certain-boot-69d68e2fb4.strapiapp.com/api/categories/${id}?populate=products`;
    const response = await apiClient.get(apiRequestUrl);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
