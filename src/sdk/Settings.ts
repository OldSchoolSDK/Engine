'use strict'

import { PlayerStats, SerializePlayerStats, DeserializePlayerStats } from "./PlayerStats";

export class Settings {
  static tileSize = parseInt(window.localStorage.getItem('tile_size')) || 24;
  static fps = 50;
  static tickMs = 600;
  static playsAudio: boolean;
  static inputDelay: number;
  static rotated: string;
  static region: string;
  static displayXpDrops: boolean

  static inventory_key: string;
  static spellbook_key: string;
  static equipment_key: string;
  static prayer_key: string;


  static loadout: string;

  static player_stats: PlayerStats;
  static is_keybinding = false;

  static persistToStorage () {
    // window.localStorage.setItem('tileSize', Settings.tileSize);
    // window.localStorage.setItem('framesPerTick', Settings.framesPerTick);
    window.localStorage.setItem('playsAudio', String(Settings.playsAudio))
    window.localStorage.setItem('inputDelay', String(Settings.inputDelay))
    window.localStorage.setItem('rotated', Settings.rotated)
    window.localStorage.setItem('region', Settings.region)
    window.localStorage.setItem('displayXpDrops', String(Settings.displayXpDrops))

    window.localStorage.setItem('inventory_key', Settings.inventory_key)
    window.localStorage.setItem('spellbook_key', Settings.spellbook_key)
    window.localStorage.setItem('equipment_key', Settings.equipment_key)
    window.localStorage.setItem('prayer_key', Settings.prayer_key)
    window.localStorage.setItem('stats', SerializePlayerStats(Settings.player_stats))
    window.localStorage.setItem('loadout', Settings.loadout)
  }

  static readFromStorage () {
    Settings.playsAudio = window.localStorage.getItem('playsAudio') === 'true' || false
    // Settings.tileSize = parseInt(window.localStorage.getItem('tileSize')) || 23;
    // Settings.framesPerTick = parseInt(window.localStorage.getItem('framesPerTick')) || 30;
    Settings.inputDelay = parseInt(window.localStorage.getItem('inputDelay')) || 100
    Settings.rotated = window.localStorage.getItem('rotated') || 'south'
    Settings.loadout = window.localStorage.getItem('loadout') || 'max_tbow';

    Settings.region = 'inferno'
    Settings.displayXpDrops = window.localStorage.getItem('displayXpDrops') === 'true' || true

    Settings.inventory_key = window.localStorage.getItem('inventory_key') || 'F4'
    Settings.spellbook_key = window.localStorage.getItem('spellbook_key') || 'F2'
    Settings.equipment_key = window.localStorage.getItem('equipment_key') || 'F1'
    Settings.prayer_key = window.localStorage.getItem('prayer_key') || 'F3'
    Settings.player_stats = DeserializePlayerStats(window.localStorage.getItem('stats'))

  }
}
