# 301redirect-test-tool


## install node(use nvm)

To download nvm
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

To download, compile, and install the latest release of node, do this:

```sh
nvm install node # "node" is an alias for the latest version
```

To install a specific version of node:

```sh
nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
```

The first version installed becomes the default. New shells will start with the default version of node (e.g., `nvm alias default`).

You can list available versions using `ls-remote`:

```sh
nvm ls-remote
```

And then in any new shell just use the installed version:

```sh
nvm use node
```

## usage
```sh
node index.js
```
