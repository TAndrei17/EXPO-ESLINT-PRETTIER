import { createSlice } from '@reduxjs/toolkit';

import { InitialTestState } from '@/models/testTypes';

const initialState: InitialTestState = {
	test: '',
};

const listSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		addTest: (state: InitialTestState) => {
			state.test = 'success';
		},
	},
});

export const { addTest } = listSlice.actions;
export default listSlice.reducer;
