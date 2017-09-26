export const FORM_SEND = 'FORM_SEND'
export const FORM_GET = 'FORM_GET'

export function send(agency_name,ap_first_name,ap_last_name,ap_mail,ap_phone_country_code,ap_phone_number,ap_title,company_address,
                     company_city,company_district,company_mail,company_name,company_web_site,country_code,first_name,
                     gross_revenue,gross_revenue_currency,last_name,phone_country_code,phone_number,tax_number,tax_office,zip_code){
    return{
        type:FORM_SEND,
        agency_name:agency_name,
        ap_first_name:ap_first_name,
        ap_last_name:ap_last_name,
        ap_mail:ap_mail,
        ap_phone_country_code:ap_phone_country_code,
        ap_phone_number:ap_phone_number,
        ap_title:ap_title,
        company_address:company_address,
        company_city:company_city,
        company_district:company_district,
        company_mail:company_mail,
        company_name:company_name,
        company_web_site:company_web_site,
        country_code:country_code,
        first_name:first_name,
        gross_revenue:gross_revenue,
        gross_revenue_currency:gross_revenue_currency,
        last_name:last_name,
        phone_country_code:phone_country_code,
        phone_number:phone_number,
        tax_number:tax_number,
        tax_office:tax_office,
        zip_code:zip_code,

    }
}

export function get(name,surname){
    return{
        type:FORM_GET,





    }
}
