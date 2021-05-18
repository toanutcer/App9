import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'device',
      columns: [
        {name: 'deviceID', type: 'string'},
        {name: 'note', type: 'string', isOptional: true},
      ],
    }),
  ],
});
