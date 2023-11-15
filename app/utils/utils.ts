/**
 * Remove any undefined data and convert class instance into object
 * @param data object that need to be sanitize
 * @returns sanitized object
 */
export function sanitizeData(data: any) {
  const temp: any = {};
  deletePropertiesOfUndefined(data);
  copyObject(data, temp);
  return temp;
}

/**
 * Remove any undefined or null data from object
 * @param data object that needed it undefined data to be removed
 */
function deletePropertiesOfUndefined(data: any) {
  for (const key in data) {
    if (data[key] === undefined || data[key] === null) {
      delete data[key];
    } else if (typeof data[key] === "object") {
      deletePropertiesOfUndefined(data[key]);
      if (Object.keys(data[key]).length === 0) {
        delete data[key];
      }
    }
  }
}

/**
 * Convert class instance to object form
 * @param data source data that want to be replicated
 * @param temp object that the converted data will be stored
 */
function copyObject(data: any, temp: any) {
  for (const key in data) {
    if (key === "created_at" || key === "updated_at") {
      temp[key] = data[key];
      continue;
    }
    if (Array.isArray(data[key])) {
      temp[key] = [];
      for (let i = 0; i < data[key].length; i++) {
        if (typeof data[key][i] === "object") {
          temp[key][i] = {};
          copyObject(data[key][i], temp[key][i]);
        } else {
          temp[key][i] = data[key][i];
        }
      }
    } else if (typeof data[key] === "object") {
      temp[key] = {};
      copyObject(data[key], temp[key]);
    } else {
      temp[key] = data[key];
    }
  }
}
