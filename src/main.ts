import { 
  Plugin
} from 'obsidian';

import {
  PLUGIN_DEFAULT_SETTINGS
} from "src/Settings/PluginSettings";
import type {
  PluginSettings
} from "src/Settings/PluginSettings";
import { MyPluginSettingsTab } from 'src/Settings/SettingsTab';


/* ========================= MyPlugin ========================= */
export default class MyPlugin extends Plugin {
  declare settings: PluginSettings;

  /* Load plugin */
  override async onload(): Promise<void> {
    /* Load plugin settings */
    await this.loadSettings();

    /* Register settings tab */
    this.addSettingTab(new MyPluginSettingsTab(this));
  }

  /* Unload plugin */
  override onunload(): void {

  }

  /* Load settings */
  async loadSettings(): Promise<void> {
    this.settings = Object.assign(
      {},
      structuredClone(PLUGIN_DEFAULT_SETTINGS),
      (await this.loadData() ?? {}) as Partial<PluginSettings>,
    );
  }

  /* Save settings */
  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }
}
