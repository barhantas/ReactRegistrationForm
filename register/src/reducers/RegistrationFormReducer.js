import {FORM_SEND,FORM_GET}  from '../actions/RegistrationFormActions';

const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FORM_SEND:
            return {
                ...state,
                agency_name:action.agency_name,
                ap_first_name:action.ap_first_name,
                ap_last_name:action.ap_last_name,
                ap_mail:action.ap_mail,
                ap_phone_country_code:action.ap_phone_country_code,
                ap_phone_number:action.ap_phone_number,
                ap_title:action.ap_title,
                company_address:action.company_address,
                company_city:action.company_city,
                company_district:action.company_district,
                company_mail:action.company_mail,
                company_name:action.company_name,
                company_web_site:action.company_web_site,
                country_code:action.country_code,
                first_name:action.first_name,
                gross_revenue:action.gross_revenue,
                gross_revenue_currency:action.gross_revenue_currency,
                last_name:action.last_name,
                phone_country_code:action.phone_country_code,
                phone_number:action.phone_number,
                tax_number:action.tax_number,
                tax_office:action.tax_office,
                zip_code:action.zip_code,
            };
        case FORM_GET:
            return {
                ...state,
            };

   /*     case c.FORM_RESET:
            return initialState;*/

        default:
            return state;
    }
}
