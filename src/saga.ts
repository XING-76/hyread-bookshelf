import { MainSaga } from '@/container/MainPage/model/saga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([MainSaga()]);
}

export default rootSaga;
