export async function catchError<T>(callback: Promise<ApiResponse<T>>) {
  try {
    const response = await callback;
    if (response.status === 200) {
      return response as SuccessResponse<T>;
    }
    return response as FailureResponse<T>;
  } catch (error) {
    return {
      status: 500,
      message: "Internal Server Error",
      error: error as Error,
    };
  }
}
