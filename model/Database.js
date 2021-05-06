import Post from './Post';
import Database from '@nozbe/watermelondb/Database';
const database = new Database({
  // ...
  modelClasses: [Post],
});
