import { useDispatch, useSelector } from 'react-redux';
import { storesType } from '@container/reducers';
import IconLoveEmpty from '@modules/Icon/IconLoveEmpty';
import IconLoveFull from '@modules/Icon/IconLoveFull';
import LazyImage from '@modules/LazyImage';
import { SET_BOOKS_DATA } from '../model';
import { BookCard as BookCardType } from '../model/types';
import './css/bookCard.scss';

interface Props {
    info: BookCardType;
}

function BookCard(props: Props) {
    const {
        info: { imgUrl, title, isLike, bookId }
    } = props;

    const dispatch = useDispatch();

    const { booksData } = useSelector((state: storesType) => ({ ...state.mainPage }));

    const handleOnClickLikeButton = (id: number) => {
        const filterBooks = booksData.map((book) => {
            if (book.bookId === id) {
                return {
                    ...book,
                    isLike: !book.isLike
                };
            }
            return book;
        });
        dispatch(SET_BOOKS_DATA(filterBooks));
    };

    return (
        <div className="bookCard__field">
            <div className="bookCard__image">
                <LazyImage src={imgUrl} alt={title} />
                <div className="bookCard__likeBtn" onClick={() => handleOnClickLikeButton(bookId)} aria-hidden="true">
                    {isLike ? <IconLoveFull /> : <IconLoveEmpty />}
                </div>
            </div>
            <div className="bookCard__bookName">{title}</div>
        </div>
    );
}

export default BookCard;
