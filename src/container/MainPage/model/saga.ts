import { HTTP_STATUS_CODE } from '@configs/serviceConfig';
import ApiRequest from '@service/apiRequest';
import { call, put, takeEvery } from 'redux-saga/effects';
import { convertResponseOfGetAllAPI } from '../service/dataProcessing';
import { FETCH_GET_DATA, SET_BOOKS_DATA, SET_LOADING_STATE, SET_API_STATUS } from './index';

function* fetchGetData() {
    try {
        yield put(SET_LOADING_STATE(true));

        // const response: Promise<any> = yield call(ApiRequest.getAll);
        // 因無法訪問，暫用模擬資料
        const response: Promise<any> = yield call(ApiRequest.getFake);

        const convertedResponse = convertResponseOfGetAllAPI(response);

        yield put(SET_BOOKS_DATA(convertedResponse));
        yield put(SET_API_STATUS({ type: 'get', code: HTTP_STATUS_CODE.OK }));
    } catch (error) {
        console.error(error);
        yield put(SET_API_STATUS({ type: 'get', code: error }));
    } finally {
        yield put(SET_LOADING_STATE(false));
    }
}

function* MainSaga() {
    yield takeEvery(FETCH_GET_DATA, fetchGetData);
}

export { MainSaga };
