import { handleActions } from 'redux-actions';
import * as types from 'Stores/Actions/actionTypes';
import createFetchingReducer from './Creators/createFetchingReducer';
import createSetSettingValueReducer from './Creators/createSetSettingValueReducer';
import createClearPendingChangesReducer from './Creators/createClearPendingChangesReducer';
import createSavingReducer from './Creators/createSavingReducer';
import createUpdateReducer from './Creators/createUpdateReducer';
import createSetErrorReducer from './Creators/createSetErrorReducer';
import createSetSaveErrorReducer from './Creators/createSetSaveErrorReducer';
import createReducers from './Creators/createReducers';

const defaultState = {
  ui: {
    fetching: false,
    error: null,
    pendingChanges: {},
    saving: false,
    saveError: null,
    item: {}
  },

  advancedSettings: false
};

const propertyNames = [
  'ui'
];

const settingsReducers = handleActions({

  [types.TOGGLE_ADVANCED_SETTINGS]: (state, { payload }) => {
    return Object.assign({}, state, { advancedSettings: !state.advancedSettings });
  },

  [types.FETCHING]: createReducers(propertyNames, createFetchingReducer),
  [types.SET_ERROR]: createReducers(propertyNames, createSetErrorReducer),
  [types.UPDATE]: createReducers(propertyNames, createUpdateReducer),
  [types.SAVING]: createReducers(propertyNames, createSavingReducer),
  [types.SET_SAVE_ERROR]: createReducers(propertyNames, createSetSaveErrorReducer),
  [types.CLEAR_PENDING_CHANGES]: createReducers(propertyNames, createClearPendingChangesReducer),

  [types.SET_UI_SETTINGS_VALUE]: createSetSettingValueReducer('ui')

}, defaultState);

export default settingsReducers;
