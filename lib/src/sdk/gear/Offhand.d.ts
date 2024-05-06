import { Equipment, EquipmentTypes } from "../Equipment";
import { Player } from "../Player";
export declare class Offhand extends Equipment {
    get type(): EquipmentTypes;
    inventoryLeftClick(player: Player): void;
    assignToPlayer(player: Player): void;
    unassignToPlayer(player: Player): void;
    currentEquipment(player: Player): Equipment;
}
