const results = require('../results.json');
import * as humps from 'humps';

export class DataService {

  loadData(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this._toCamelCase(results));
    });
  }

  private _toCamelCase(obj: any): any {
    if (typeof(obj) === 'string')
      return humps.camelize(obj);
    else
      return humps.camelizeKeys(obj);
  }
}