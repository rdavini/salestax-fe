import axios from "axios"

const SALES_TAX_API_URL = "http://localhost:3001/api/v1";
const FIXER_CONVERT_API_URL = "https://api.apilayer.com/fixer"

// the key below should not be exposed if this was a production app. If this was the
// case it's recomended to store this key in an enviroment variable or create a separated service just to return keys
const fixer_config = { headers: { 'apikey': 'pIdVkEUvukUwnIAunAHUUPiL5l9OpBPT' } };

export default {
    api_sales_tax_create_items: (items) => axios.post(`${SALES_TAX_API_URL}/items`, items),
    api_sales_tax_get_items: () => axios.get(`${SALES_TAX_API_URL}/items`),
    api_fixer_latest_rate: (base, symbols) => axios.get(`${FIXER_CONVERT_API_URL}/latest?base=${base}&symbols=${symbols}`, fixer_config)
}