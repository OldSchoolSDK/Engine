"use strict";

import TbowInventImage from "../../assets/images/weapons/twistedBow.png";
import { Unit } from "../../sdk/Unit";
import { RangedWeapon } from "../../sdk/weapons/RangedWeapon";
import { ItemName } from "../../sdk/ItemName";
import { AttackStyle, AttackStyleTypes } from "../../sdk/AttackStylesController";
import { AttackBonuses } from "../../sdk/gear/Weapon";

export class TwistedBow extends RangedWeapon {
  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 70,
      },
      defence: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 0,
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 20,
        magicDamage: 0,
        prayer: 0,
      },
      targetSpecific: {
        undead: 0,
        slayer: 0,
      },
    };
  }

  compatibleAmmo(): ItemName[] {
    return [ItemName.DRAGON_ARROWS];
  }

  attackStyles() {
    return [AttackStyle.ACCURATE, AttackStyle.RAPID, AttackStyle.LONGRANGE];
  }

  attackStyleCategory(): AttackStyleTypes {
    return AttackStyleTypes.BOW;
  }

  defaultStyle(): AttackStyle {
    return AttackStyle.RAPID;
  }

  get attackSpeed() {
    if (this.attackStyle() === AttackStyle.LONGRANGE) {
      return 6;
    }
    return 5;
  }

  get weight(): number {
    return 1.814;
  }

  get itemName(): ItemName {
    return ItemName.TWISTED_BOW;
  }

  get isTwoHander(): boolean {
    return true;
  }

  get attackRange() {
    return 10;
  }

  get inventoryImage() {
    return TbowInventImage;
  }

  _accuracyMultiplier(from: Unit, to: Unit, bonuses: AttackBonuses) {
    const magic = Math.min(Math.max(to.currentStats.magic, to.bonuses.attack.magic), 250);
    const multiplier = (140 + ((10 * 3 * magic) / 10 - 10) / 100 - Math.pow((3 * magic) / 10 - 100, 2) / 100) / 100;
    return Math.min(1.4, Math.max(0, multiplier));
  }

  _damageMultiplier(from: Unit, to: Unit, bonuses: AttackBonuses) {
    const magic = Math.min(Math.max(to.currentStats.magic, to.bonuses.attack.magic), 250);
    const multiplier = (250 + ((10 * 3 * magic) / 10 - 14) / 100 - Math.pow((3 * magic) / 10 - 140, 2) / 100) / 100;
    return Math.min(2.5, Math.max(0, multiplier));
  }
}
