import Grid from '@modules/Grid';
import BookCard from './BookCard';
import { BookCard as BookCardType } from '../model/types';
import './css/bookShelf.scss';

function BookShelf(props: any) {
    const { data } = props;

    return (
        <div className="bookShelf__field">
            <Grid row>
                {data.map((book: BookCardType) => (
                    <Grid col xs="4" md="3" lg="2" xl="2" xxl="2" key={book.bookId} className="grid__justify__center">
                        <BookCard info={book} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default BookShelf;
