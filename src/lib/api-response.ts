export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: string | null;
};

export function ok<T>(data: T): Response {
  return Response.json({ success: true, data, error: null } satisfies ApiResponse<T>);
}

export function fail(message: string, status = 500): Response {
  return Response.json({ success: false, data: null, error: message } satisfies ApiResponse<null>, { status });
}
