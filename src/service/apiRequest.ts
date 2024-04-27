import { HTTP_METHOD, SERVICE_URL_CONFIG } from '@configs/serviceConfig';
import { httpRequest } from './httpRequest';

export default class ApiRequest {
    /**
     * 取得所有資料
     * @param
     * @returns
     */
    static getAll() {
        return httpRequest({
            url: `api/${SERVICE_URL_CONFIG.exam}/${SERVICE_URL_CONFIG.userList}`,
            method: HTTP_METHOD.GET
        });
    }

    /**
     * 取得假資料
     * @param
     * @returns
     */
    static getFake() {
        return httpRequest({
            url: `/books.json`,
            method: HTTP_METHOD.GET
        });
    }
}
