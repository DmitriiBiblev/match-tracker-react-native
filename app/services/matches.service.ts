import { IMatch } from '../interfaces';

interface Response {
  type: string;
  data: IMatch[];
}

const socketUrl = 'wss://app.ftoyd.com/fronttemp-service/ws';

let socket: WebSocket | null = null;

export const getMatches = (onMatches: (matches: IMatch[]) => void, onError: () => void): void => {
  if (socket) socket.close();

  socket = new WebSocket(socketUrl);

  socket.onmessage = (event: MessageEvent) => {
    const { data }: Response = JSON.parse(event.data);

    onMatches(data);
  };

  socket.onerror = onError;
};
