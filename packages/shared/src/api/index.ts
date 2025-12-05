// API client types and interfaces

export interface StrapiConfig {
  url: string;
  apiToken?: string;
}

export interface StrapiQueryParams {
  populate?: string | string[] | Record<string, any>;
  filters?: Record<string, any>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  fields?: string[];
  locale?: string;
}




