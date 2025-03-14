export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
