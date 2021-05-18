import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Device extends Model {
  static table = 'device';

  @field('deviceID') deviceID: any;
  @field('note') note: any;
}
