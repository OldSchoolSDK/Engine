import { ImageLoader } from "../../sdk/utils/ImageLoader";
import InventImage from '../../assets/images/equipment/Crystal_shield.png';
import { Offhand } from "../../sdk/gear/Offhand";
import { ItemNames } from "../../sdk/ItemNames";

export class CrystalShield extends Offhand{
  inventorySprite: HTMLImageElement = ImageLoader.createImage(this.inventoryImage)

  get inventoryImage () {
    return InventImage
  }
  get itemName(): ItemNames {
    return ItemNames.CRYSTAL_SHIELD
  }
  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: -10,
        range: -10
      },
      defence: {
        stab: 51,
        slash: 54,
        crush: 53,
        magic: 0,
        range: 80
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 0,
        magicDamage: 0,
        prayer: 0
      },
      targetSpecific: {
        undead: 0,
        slayer: 0
      }
    }
  }
}