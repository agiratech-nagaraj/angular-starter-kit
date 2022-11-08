/**
 * @description
 *  Helper functions class
 */
export class Helper {
  /**
   *
   * @description
   *   To get the unique id
   *
   * @example
   *   Helper.generateUniqueId('name');
   *   name-kadye58y1vjm81vz6he
   *
   * @param extraString - to append extra string with id
   * @param prefix - whether string append to prefix or not
   * @param delimiter - separator name and id
   */
  static generateUniqueId(extraString = '', delimiter = '-', prefix = true) {
    const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    return prefix
      ? `${extraString}${delimiter}${uid}`
      : `${uid}${delimiter}${extraString}`;
  }

  /**
   * @description
   *   To remove duplicates in array of primitives  and array of objects
   *
   * @example
   *   Helper.removeDuplicate([{id: 1}, {id: 1}, {id: 2}], 'id');
   *   [ { id: 1 }, { id: 2 } ]
   *
   * @param array - array of data
   * @param id - for array of objects
   */
  static removeDuplicate<T>(array: Array<T>, id = ''): Array<T> {
    // guard
    if (!array) {
      return array;
    }

    if (!id) {
      return array.filter((val, idx) => array.indexOf(val) === idx);
    }
    return array.filter((oVal: any, idx) => {
      return array.findIndex((iVal: any) => iVal[id] == oVal[id]) === idx;
    });
  }

  /**
   * @description
   *   Cloning first order keys of object
   * @param data
   */
  static shallowClone(data: any) {
    if (data) {
      return Array.isArray(data) ? [...data] : { ...data };
    }
  }

  /**
   * @description
   *   Cloning deeply
   *
   * @param data
   */
  static deepClone(data: any) {
    if (data) {
      return JSON.parse(JSON.stringify(data));
    }
  }

  /**
   * @description
   *  Remove the html element from dom
   *
   * @example
   *    Helper.removeHTMLElementById('submit');
   *
   * @param elId - html element id
   * @return true - if removed else return false
   */
  static removeHTMLElementById(elId: string): boolean {
    const existingStarEl = document.getElementById(elId);
    if (existingStarEl) {
      existingStarEl.remove();
      return true;
    }
    return false;
  }

  /**
   * @description
   *  Remove the html element from dom
   *
   * @example
   *    Helper.isArrayEqual(arrayOne, arrayTwo);
   *
   */

  static isArrayEqual(arrayOne: Array<any>, arrayTwo: Array<any>) {
    if (arrayOne === arrayTwo) {
      return true;
    }
    if (
      arrayOne == null ||
      arrayTwo == null ||
      arrayOne.length !== arrayTwo.length
    ) {
      return false;
    }
    arrayOne = arrayOne.sort();
    arrayTwo = arrayTwo.sort();
    for (let i = 0; i < arrayOne.length; ++i) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * @description
   *  formatUrlWithParams
   *
   * @param url
   * @param params
   */
  static formatUrlWithParams(url: string, params: ParamsObject) {
    if (url && params) {
      Object.keys(params).forEach((key, index) => {
        if (params[key] && params[key] !== null) {
          let o = '&';
          if (index === 0) {
            o = '?';
          }
          url += `${o}${key}=${params[key]}`;
        }
      });
    }
    return url;
  }
  static makeString(arr: Array<any>, separator = 'and') {
    if (arr.length === 1) {
      return arr[0];
    }
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    let str = firsts.join(', ');
    if (last && arr.length > 1) {
      str = str + ' ' + separator + ' ' + last;
    }
    return str;
  }

  static removeEmptyOrNull(searchData: any) {
    // Delete null or empty string from the search data;
    Object.keys(searchData).map((key) => {
      if (
        searchData[key] == '' ||
        searchData[key] === null ||
        (typeof searchData[key] === 'string' && searchData[key].trim() == '')
      ) {
        delete searchData[key];
      }
    });
    return searchData;
  }

  static removeEmptyOrNullRecursive(obj: any) {
    Object.entries(obj).forEach(
      ([key, val]) =>
        (val &&
          typeof val === 'object' &&
          this.removeEmptyOrNullRecursive(val)) ||
        ((val === null || val === '' || val === undefined) && delete obj[key])
    );
    return obj;
  }

  static removeEmptyArrayAndEmptyObject(payload: any) {
    if (!payload) return payload;

    Object.keys(payload).forEach((key) => {
      const value = payload[key];
      if (Array.isArray(value) && value.length === 0) {
        delete payload[key];
        return;
      }

      if (
        !!value &&
        !Array.isArray(value) &&
        typeof value === 'object' &&
        Object.keys(value).length === 0
      ) {
        delete payload[key];
      }
    });

    return payload;
  }

  static isObjectNotEmpty(value: any) {
    return !!value && typeof value == 'object' && Object.keys(value).length > 0;
  }

  static isFunction(fn: Function) {
    return typeof fn === 'function';
  }

  // force a number between two constraints
  static constrain(
    desired: number,
    min: number = -Infinity,
    max: number = Infinity
  ): number {
    return Math.min(max, Math.max(desired, min));
  }
}

interface ParamsObject {
  [k: string]: any;
}
