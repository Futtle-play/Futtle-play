const customerAccountUrl = process.env.NEXT_PUBLIC_SHOPIFY_CUSTOMER_ACCOUNT_URL;
const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

export function getCustomerAccountUrl(): string {
  if (customerAccountUrl) {
    return customerAccountUrl;
  }

  if (storeDomain) {
    return `https://${storeDomain}/account`;
  }

  return "#";
}

export function isCustomerAccountConfigured(): boolean {
  return Boolean(customerAccountUrl || storeDomain);
}
