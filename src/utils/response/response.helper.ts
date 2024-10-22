import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorLog } from 'src/database/schema/error.schema';

@Injectable()
export class ResponseHelper {
  constructor(
    @InjectModel(ErrorLog.name)
    private errorLogModel: Model<ErrorLog>,
  ) {}
  async success({ res, data }) {
    return res.status(HttpStatus.OK).json({
      data: data,
      statusCode: HttpStatus.OK,
      message: 'success',
    });
  }

  async error({ res, error, req, errorCode = HttpStatus.BAD_REQUEST }) {
    await this.errorLogModel.create({
      user_id: req?.auth?.user?.id || null,
      method: req.method,
      status_code: errorCode,
      url: req.url,
      error: error?.message || '',
    });
    return res.status(errorCode).json({
      statusCode: errorCode,
      message: [error?.message, `error in ${req?.originalUrl}`],
      error: error?.response,
    });
  }
}
