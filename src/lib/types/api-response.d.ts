declare type SuccessResponse<T> = {
  status: 200;
} & T;

declare type FailureResponse<T> = {
  status: Exclude<number, 200>;
  error?: string;
  errors?: string;
} & T;

declare type ApiResponse<T> = SuccessResponse<T> | FailureResponse<T>;
