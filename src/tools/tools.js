/**
 * Get an array of params and returns a string separate by '&'
 * @param params array,
 **/
export const getQueryParams = (params) => params.join('&');

/**
 * Round number to two decimals
 * @param data number,
 **/
export const roundToTwo = (data) => Math.round(data * 100) / 100
