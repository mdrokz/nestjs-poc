import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse, CIDException } from '../http';

@Catch(CIDException)
export class CIDExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(CIDExceptionFilter.name);
  catch(exception: CIDException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const data: BaseResponse = (typeof exception.getResponse() == "object") ? exception.getResponse() as BaseResponse : null;

    this.logger.log({url: request.url,body: request.body,cidErrors: data.cidErrors});

    response
      .status(HttpStatus.OK)
      .send(data);
  }
}