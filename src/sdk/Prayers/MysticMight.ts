'use strict'

import { BasePrayer, PrayerGroups } from './BasePrayer'
import { Settings } from '../Settings'

export class MysticMight extends BasePrayer {
  get name () {
    return 'Mystic Might'
  }

  get groups () {
    return [PrayerGroups.MAGIC, PrayerGroups.DEFENCE]
  }

  drainRate(): number {
    return 12;
  }

  isOverhead () {
    return false
  }

  feature () {
    return 'offensiveMagic'
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
