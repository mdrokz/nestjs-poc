import { HttpException, HttpStatus } from "@nestjs/common";
import { CIDERROR } from "./common";

export class BaseResponse {
    apiStatus?: HttpStatus = HttpStatus.OK;
    cidErrors: CIDERROR[];
    data?: any = null;
}

export class BaseRequest {

}

export class CIDException extends HttpException {
    constructor(response: BaseResponse) {
        super(response, HttpStatus.OK);
    }
}
