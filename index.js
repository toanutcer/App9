/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {mySchema} from './src/models/schema';
import {dbModels} from './src/models/index.js';
import Post from './model/Post';
import App from './App';
AppRegistry.registerComponent(appName, () => App);
