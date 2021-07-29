import { ImageLoader } from "../../sdk/utils/ImageLoader";
import InventImage from '../../assets/images/equipment/Ring_of_suffering_imbued.png';
import { Ring } from "../../sdk/gear/Ring";
import { ItemNames } from "../../sdk/ItemNames";

export class RingOfSufferingImbued extends Ring{
  inventorySprite: HTMLImageElement = ImageLoader.createImage(this.inventoryImage)

  get inventoryImage () {
    return InventImage
  }
  get itemName(): ItemNames {
    return ItemNames.RING_OF_SUFFERING_I
  }

  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 0,
        range: 70
      },
      defence: {
        stab: 20,
        slash: 20,
        crush: 20,
        magic: 20,
        range: 20
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 0,
        magicDamage: 0,
        prayer: 4
      },
      targetSpecific: {
        undead: 0,
        slayer: 0
      }
    }
  }
}