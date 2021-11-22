import * as TYPES from '../constants';

export const setTitle = (value: string) => ({ type: TYPES.SET_TITLE, value });
export const setColor = (value: string) => ({ type: TYPES.SET_COLOR, value });