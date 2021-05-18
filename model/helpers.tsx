import {database} from './database';

export type Device = {
  createdAt?: Date;
  deviceID: string | number;
  note: string | undefined;
};

export const saveDevice = async (item: any) => {
  await database.action(async () => {
    const value = JSON.parse(item);
    const value2 = JSON.parse(value.data.toString());
    console.log('value2 = ', item);
    if (value2.CMD === 'TYPE_DEVICE') {
      console.log(value2.DATA.DEVICE_ID);
      return database.collections.get('device').create(device => {
        device.deviceID = value2.DATA.DEVICE_ID;
        device.note = 'Đèn rạng đông';
      });
    }
  });
};

export const getDevice = async () => {
  const postsCollection = database.get('device');
  const allPosts = await postsCollection.query().fetch();
  console.log('GetDevice la : ', allPosts);
  return allPosts;
};
export const deleteDevice = async () => {
  await database.action(async () => {
    database.unsafeResetDatabase();
  });
  console.log('Đã xóa');
};
