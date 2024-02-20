import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storesType } from '@container/reducers';
import ErrorBoundary from '@modules/ErrorBoundary';
import Loading from '@modules/Loading';
import Header from './components/Header';
import BookShelf from './components/BookShelf';
import { FETCH_GET_DATA } from './model';

function Index() {
    const dispatch = useDispatch();

    const { booksData, loadingState } = useSelector((state: storesType) => ({ ...state.mainPage }));

    useEffect(() => {
        dispatch(FETCH_GET_DATA());
    }, []);

    return (
        <>
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>

            <ErrorBoundary>{loadingState ? <Loading /> : <BookShelf data={booksData} />}</ErrorBoundary>
        </>
    );
}

export default Index;
