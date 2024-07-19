// 1. Use import.meta.env.YOUR_ENV_VAR in your code. (conventional)
declare interface ImportMeta {
  readonly env: Env;
}

declare var process: {
  env: {
    NG_APP_ENV: string;
    [key: string]: any;
  };
};

