export interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
}

export interface EmbeddedSandboxAPI {
  EmbeddedSandbox: new (options: {
    target: string
    initialEndpoint: string
    hideCookieToggle: boolean
    initialState: {
      includeCookies: boolean
    }
  }) => any
}