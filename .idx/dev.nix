
{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20  # Installs Node.js version 20
    pkgs.bun # Installs bun package manager
  ];
  idx = {
    extensions = [
      "dbaeumer.vscode-eslint"  # For linting JavaScript and TypeScript
      "bradlc.vscode-tailwindcss"  # Tailwind CSS IntelliSense
    ];
    workspace = {
      onCreate = {
        # Initializes a new bun project and installs dependencies.
        init = "bun init -y && bun add react react-dom react-router-dom zustand immer && bun add -d tailwindcss postcss autoprefixer vite @vitejs/plugin-react";
      };
      onStart = {
        # Runs the development server.
        dev = "bun run dev";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["bun" "run" "dev" "--" "--port" "$PORT"];
          manager = "web";
        };
      };
    };
  };
}
