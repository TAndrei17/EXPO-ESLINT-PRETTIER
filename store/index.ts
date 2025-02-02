import { configureStore } from '@reduxjs/toolkit';

import testReducer from './listSlice';

export default configureStore({
	reducer: {
		test: testReducer,
	},
});
