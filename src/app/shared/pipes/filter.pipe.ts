import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], keyStr: string, value: any): any {
    try {
      const keys = keyStr.split('.');
      return list.filter((i) => {
        return String(
          this.getValueFromKeys(i, JSON.parse(JSON.stringify(keys)))
        )
          .toLowerCase()
          .includes(String(value).toLowerCase());
      });
    } catch (e) {
      return list;
    }
  }

  getValueFromKeys(value: any, keys: any[]): any {
    if (keys.length === 1) return value[keys[0]];
    const key = keys.shift();
    return this.getValueFromKeys(value[key], keys);
  }
}
