export abstract class BaseResponse<T extends BaseResponse<T>> {
  constructor(partial: Partial<T>) {
    Object.assign(this, partial);
  }
}
