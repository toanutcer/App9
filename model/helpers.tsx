import {database} from './database';
import {Q} from '@nozbe/watermelondb';

const devicesCollection = database.get('devices');
const roomsCollection = database.get('rooms');

export const saveDevice = (item: any) => {
  database.action(async () => {
    const value = JSON.parse(item);
    const value2 = JSON.parse(value.data.toString());
    devicesCollection.create((device: any) => {
      device.device_id = value2.DATA.DEVICE_ID;
      device.room_id = 'Đèn rạng đông';
      device.name = 'Đèn rạng đông';
      device.note = 'Đèn rạng đông';
    });
  });
};

export const getDevice = async () => {
  return await devicesCollection.query().fetch();
};
export const deleteAllDevice = async () => {
  await database.action(async () => {
    database.unsafeResetDatabase();
  });
  console.log('Đã xóa');
};
export const deleteDevice = async (id: any) => {
  await database.action(async () => {
    await devicesCollection.query(Q.where('device_id', id)).markAllAsDeleted();
    console.log('Xóa thành công khỏi db');
  });
};
export const deleteRoom = async (name: any) => {
  await database.action(async () => {
    await roomsCollection.query(Q.where('name', name)).markAllAsDeleted();
    console.log('Xóa thành công khỏi db');
  });
};
export const crateRoom = async (id: any, name: any) => {
  database.action(async () => {
    roomsCollection.create((room: any) => {
      console.log(name);
      room.device_id = id;
      room.name = name;
    });
  });
};
export const getRoom = async () => {
  return await roomsCollection.query().fetch();
};
