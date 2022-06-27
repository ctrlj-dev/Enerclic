import API from "./API";
import { getQueryParams } from "../tools/tools";

/**
 * Returns a specific widget filtered by a date range, time aggregation and geo ids.
 * @param lang string - Defines the response language.,
 * @param category string - Defines the general category.,
 * @param widget string - Defines the particular widget to be retrieved.,
 * @param query array - Set of parameters used to filter the requested data,
 **/

export const getRedDataService =  (lang, category, widget, query) =>
  new Promise((resolve, reject) => {
    API()
      .get(`/${lang}/datos/${category}/${widget}?${getQueryParams(query)}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
