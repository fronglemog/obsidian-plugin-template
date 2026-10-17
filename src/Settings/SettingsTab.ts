import { PluginSettingTab, type SettingDefinitionItem } from 'obsidian';

import type MyPlugin from 'src/main';

/* ========================= MyPluginSettingsTab ========================= */
export class MyPluginSettingsTab extends PluginSettingTab {
  private plugin: MyPlugin;

  constructor(plugin: MyPlugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }

  override getSettingDefinitions (): SettingDefinitionItem[] {
    const settingsDefinitions: SettingDefinitionItem[] = [

    ];

    return settingsDefinitions;
  }
}
