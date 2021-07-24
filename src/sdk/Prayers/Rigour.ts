'use strict'

import { BasePrayer, PrayerGroups } from './BasePrayer'
import { Settings } from '../Settings'

export class Rigour extends BasePrayer {
  get name () {
    return 'Rigour'
  }

  get groups (): PrayerGroups[] {
    return [PrayerGroups.RANGE, PrayerGroups.DEFENCE]
  }

  drainRate(): number {
    return 24;
  }
  
  isOverhead () {
    return false
  }

  feature () {
    return 'offensiveRange'
  }

  playOnSound () {
    if (Settings.playsAudio) {
      // new Audio(OnSound).play();
    }
  }

  playOffSound () {
    if (Settings.playsAudio) {
      // new Audio(OffSound).play();
    }
  }
}
