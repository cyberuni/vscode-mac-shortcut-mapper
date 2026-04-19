import * as assert from 'node:assert'
import { getAppKey } from './app_detector'

suite('getAppKey', () => {
	test('should return vscode for Visual Studio Code', () => {
		assert.strictEqual(getAppKey('Visual Studio Code'), 'vscode')
	})

	test('should return vscode-insiders for Visual Studio Code - Insiders', () => {
		assert.strictEqual(getAppKey('Visual Studio Code - Insiders'), 'vscode-insiders')
	})

	test('should return antigravity for Antigravity', () => {
		assert.strictEqual(getAppKey('Antigravity'), 'antigravity')
	})

	test('should return antigravity for Antigravity Next', () => {
		assert.strictEqual(getAppKey('Antigravity Next'), 'antigravity')
	})
})
