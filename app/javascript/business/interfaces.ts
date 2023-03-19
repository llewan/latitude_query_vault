export interface LoggedInResponse {
  logged_in: boolean;
  user?: any;
}

export interface Source {
  id: number;
  source_name: string;
  source_type: string;
  source_connection_string: string;
}