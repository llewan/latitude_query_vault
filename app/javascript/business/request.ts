interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: HeadersInit;
  body?: BodyInit;
  credentials?: RequestCredentials;
}

interface ApiResponse<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

const BASE_URL = 'http://127.0.0.1:3000';

export default class Request<T> {
  private baseUrl: string;

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  public async send(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(this.getUrl(url),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          ...options });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      return Promise.resolve({ data, error: null, loading: false });
    } catch (error) {
      return Promise.resolve({ data: null, error: error.message, loading: false });
    }
  }

  private getUrl(url: string): string {
    return `${this.baseUrl}${url}`;
  }
}
