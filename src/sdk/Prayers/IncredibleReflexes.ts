'use strict'

import { BasePrayer, PrayerGroups } from './BasePrayer'
import { Settings } from '../Settings'

export class IncredibleReflexes extends BasePrayer {
  get name () {
    return 'Incredible Reflexes'
  }

  get groups (): PrayerGroups[] {
    return [PrayerGroups.ATTACK]
  }

  drainRate(): number {
    return 12;
  }

  isOverhead () {
    return false
  }

  feature () {
    return 'offensiveAttack'
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
