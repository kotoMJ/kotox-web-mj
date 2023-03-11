# Nextjs Starter steps

Local
1) At the very first run: `npm install`
2) Generate static pages by command: `next build`
3) For production Image Optimization with Next.js, the optional `sharp` package is strongly recommended. Run `yarn add sharp`, and Next.js will use it automatically for Image Optimization.
4) Process: `npm run build`
5) Start app by command: `npm start`


Remote server (e.g. rosti)
1) `npm install`
2) `npm i -g next`
3) `npx kill-port 3000` to prevent next build hang forever
4) `next build` ...this might take a long time. Also in any weird troubles remove `.next` and eventually `node_modules` directories
5) For production Image Optimization with Next.js, the optional `sharp` package is strongly recommended. Run `yarn add sharp`, and Next.js will use it automatically for Image Optimization.
6) `next build`
7) `npm run build`
8`npm start`


General
1) `npx next -v` checks out version of nextjs. It should be at least 12


# NODE Basics
Brew Mac M1
https://stackoverflow.com/questions/64963370/error-cannot-install-in-homebrew-on-arm-processor-in-intel-default-prefix-usr
Before installing Brew
1) type `/usr/sbin/softwareupdate --install-rosetta --agree-to-license`
2) install Homebrew for ARM M1 chip:  `arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
3) Once Homebrew for M1 ARM is installed use this Homebrew command to install packages: `arch -x86_64 brew install <package>`
4) install node to the latest `npm install npm@latest -g`


# Notes
When we see this on Rosti: `info  - Linting and checking validity of types .Killed` it means we have low-end package (low memory). Update the package and it will work fine.

