import {field} from '@nozbe/watermelondb/decorators';
import {Model} from '@nozbe/watermelondb';

class Post extends Model {
  static table = 'posts';
  static associations = {
    comments: {type: 'has_many', foreignKey: 'post_id'},
  };

  @field('title') title;
  @field('body') body;
  @field('is_pinned') isPinned;
}
