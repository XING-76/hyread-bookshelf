import { BookCard, State } from './types';

export const bookCard: BookCard = {
    bookId: 0,
    imgUrl: '',
    title: '',
    isLike: false,
    publishDate: '',
    publisher: '',
    author: ''
};

export const initialState: State = {
    booksData: [],
    loadingState: false
};
