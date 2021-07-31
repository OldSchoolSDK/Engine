'use strict'

import { find } from 'lodash'
import { MagicWeapon } from '../../../../sdk/weapons/MagicWeapon'
import { Mob } from '../../../../sdk/Mob'
import { RangedWeapon } from '../../../../sdk/weapons/RangedWeapon'
import JalMejJakImage from '../../assets/images/Jal-MejJak.png'
import { Unit, UnitBonuses } from '../../../../sdk/Unit'
import { Weapon, AttackBonuses } from '../../../../sdk/gear/Weapon'
import { World } from '../../../../sdk/World'
import { DelayedAction } from '../../../../sdk/DelayedAction'
import { InfernoHealerSpark } from '../InfernoHealerSpark';

class HealWeapon extends Weapon {

  attack(world: World, from: Unit, to: Unit, bonuses: AttackBonuses = {}) {
    this.damage = -Math.floor(Math.random() * 25);
    this.registerProjectile(from, to, bonuses)
  }

  get isAreaAttack () {
    return false
  }
}

class AoeWeapon extends Weapon {
  attack(world: World, from: Unit, to: Unit, bonuses: AttackBonuses = {}) {
    DelayedAction.registerDelayedAction(new DelayedAction(() => {
      // make splat in 2 random spots and where the player is 
      const limitedPlayerLocation = { x: Math.min(Math.max(from.location.x - 5, world.player.location.x), from.location.x + 5), y: world.player.location.y };
      const spark1 = new InfernoHealerSpark(world, limitedPlayerLocation, from);
      world.addEntity(spark1);
      const spark2Location = { x: from.location.x + (Math.floor(Math.random() * 11) - 5), y: 16 + Math.floor(Math.random() * 5) };
      const spark2 = new InfernoHealerSpark(world, spark2Location, from);
      world.addEntity(spark2);

      const spark3Location = { x: from.location.x + (Math.floor(Math.random() * 11) - 5), y: 16 + Math.floor(Math.random() * 5) };
      const spark3 = new InfernoHealerSpark(world, spark3Location, from);
      world.addEntity(spark3);
      
    }, 4))
  }

  get isAreaAttack () {
    return true
  }
}

export class JalMejJak extends Mob {
  playerPrayerScan?: string = null;

  get displayName () {
    return 'Jal-MejJak'
  }

  get combatLevel () {
    return 250
  }

  get combatLevelColor () {
    return 'red'
  }

  setHasLOS () {
    this.hasLOS = true;
  }

  setStats () {
    this.stunned = 1

    this.weapons = {
      heal: new HealWeapon(),
      aoe: new AoeWeapon(),
    }

    // non boosted numbers
    this.stats = {
      attack: 1,
      strength: 1,
      defence: 100,
      range: 1,
      magic: 1,
      hitpoint: 75
    }

    // with boosts
    this.currentStats = JSON.parse(JSON.stringify(this.stats))

  }

  get bonuses(): UnitBonuses {
    return {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 40
      },
      defence: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 0
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 0,
        magicDamage: 1.0,
        prayer: 0
      }
    };
  }
  
  get cooldown () {
    return 3
  }

  get attackRange () {
    return 10
  }

  get size () {
    return 1
  }

  get image () {
    return JalMejJakImage
  }

  get sound () {
    return null
  }
  // attackAnimation (tickPercent: number) {
  //   this.world.worldCtx.scale(1 + Math.sin(tickPercent * Math.PI) / 4, 1 - Math.sin(tickPercent * Math.PI) / 4)
  // }

  // shouldShowAttackAnimation () {
  //   return this.attackCooldownTicks === this.cooldown && this.playerPrayerScan === null
  // }

  attackStyleForNewAttack () {
    
    return this.aggro === this.world.player ? 'aoe' : 'heal';
  }


  canMove() {
    return false;
  }

  
  // attackIfPossible() {

  // }


}
