import { Equipment } from "../Equipment";
import { Player } from "../Player";

export class Cape extends Equipment {
  assignToPlayer(player: Player) {
    player.equipment.cape = this;
  }
  unassignToPlayer(player: Player) {
    player.equipment.cape = null;
  }

  currentEquipment(player: Player): Equipment {
    return player.equipment.cape;
  }
}
