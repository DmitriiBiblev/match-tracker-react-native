import { axiosInstance } from '../api';
import { IMatch } from '../interfaces';
import AxiosXHR = Axios.AxiosXHR;

interface Response {
  data: {
    matches: IMatch[]
  };
  ok: string;
}

export const getMatches = async (): Promise<IMatch[]> => {
  const response: AxiosXHR<Response> = await axiosInstance.get<Response>('/fronttemp');

  return response.data.data.matches;
};