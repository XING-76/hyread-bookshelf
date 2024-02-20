export interface BookCard {
    bookId: number;
    imgUrl: string;
    title: string;
    isLike: boolean;
    publishDate?: string;
    publisher?: string;
    author?: string;
}

export interface State {
    booksData: Array<BookCard>;
    loadingState: boolean;
}
