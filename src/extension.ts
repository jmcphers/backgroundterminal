import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('backgroundterminal.createBackgroundTerminal', () => {
		vscode.window.createTerminal(<vscode.TerminalOptions>{
			name: "Background Terminal",
			"shellPath": "/bin/bash",
			shellArgs: ["-c", "sleep 2048"],
			hideFromUser: true,
			isTransient: false
		});
		vscode.window.showInformationMessage('Background Terminal Created');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
