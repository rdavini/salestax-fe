import axios from "axios"

const SALES_TAX_API_URL = "http://localhost:3001/api/v1";
const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

export default {
    api_sales_tax_create_items: (items) => axios.post(`${SALES_TAX_API_URL}/items`, items)
}