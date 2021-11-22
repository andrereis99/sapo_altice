import * as TYPES from '../constants';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';

export const router = connectRouter(history);

export function title(state = '', action: any) {
	if (action.type === TYPES.SET_TITLE) {
		return action.value;
	}

	return state;
}

export function color(state = '', action: any) {
	if (action.type === TYPES.SET_COLOR) {
		return action.value;
	}

	return state;
}