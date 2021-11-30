# Install Node v16.10 

This script will download and install `node v16.10` to the current directory, and create aliases for `node` and `npm`. The aliases will only live in the current shell and be lost once you close it. To reactivate the aliases, cd into the downloaded `node-v16.10.0-linux-x64` directory and run `source ./link`.

Run install script:

bash
```
source <(curl -s https://raw.githubusercontent.com/prethora/bash__node_install_script/master/public/install-node-v16.10)
```

# Warning

The command above downloads a script from the internet and runs it in your shell, always best to visit the link first and make sure are OK with running this code on your system.

The script url:

```
https://raw.githubusercontent.com/prethora/bash__node_install_script/master/public/install-node-v16.10
```