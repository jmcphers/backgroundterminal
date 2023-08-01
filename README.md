
This repository demonstrates an issue with VS Code's management of background terminals. 

To reproduce the issue using the repository:

1. Load the extension
2. Run the extension's _Create Background Terminal_ command
3. Note that the `sleep 2048` command is running
4. Use _Developer: Reload Window_ to reload the window
5. Wait exactly 1 minute
6. Note that the `sleep 2048` command is no longer running

Background terminals should persist through a window reload.
