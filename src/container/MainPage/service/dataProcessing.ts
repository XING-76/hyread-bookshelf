import { bookCard } from '../model/data';

/**
 * 取得全部資料 回傳欄位值轉換
 * @param response
 * @returns
 */
export const convertResponseOfGetAllAPI = (response: any) => {
    const newData = response?.map((item: any) => {
        const { uuid, title, coverUrl, publishDate, publisher, author } = item;

        const result = {
            ...bookCard,
            bookId: uuid,
            title,
            imgUrl: coverUrl,
            publishDate,
            publisher,
            author
        };

        return result;
    });

    return response !== null ? newData : [];
};
