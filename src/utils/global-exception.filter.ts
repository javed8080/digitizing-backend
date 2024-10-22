import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ErrorLog } from 'src/database/schema/error.schema';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(
    @InjectConnection() private readonly connection: Connection, // Inject the MongoDB connection
  ) {}

  async catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let request: any = ctx.getRequest();
    let exceptionResponse = exception?.response;
    let statusCodeException = exceptionResponse?.statusCode
      ? exceptionResponse?.statusCode
      : HttpStatus.BAD_REQUEST;

    let errorMessage: string = '';
    if (Array.isArray(exceptionResponse?.message)) {
      errorMessage = exceptionResponse?.message[0];
    }
    if (!Array.isArray(exceptionResponse?.message)) {
      errorMessage = 'api path is not valid';
    }
    const errorLogCollection = await this.connection.collection(ErrorLog.name);
    await errorLogCollection.insertOne({
      user_id: request?.auth?.user?.id ? request?.auth?.user?.id : null,
      method: request?.method,
      status_code: statusCodeException,
      url: request?.url,
      error: errorMessage,
    });
    return response.status(statusCodeException).json({
      statusCode: statusCodeException,
      message: exceptionResponse?.message,
      error: exceptionResponse?.error,
    });
  }
}
