'use strict';

import { Player } from '../../sdk/Player';
import { Region } from '../../sdk/Region';
import { Settings } from "../../sdk/Settings";
import { ControlPanelController } from "../../sdk/ControlPanelController";
import { BrowserUtils } from "../../sdk/Utils/BrowserUtils";
import { Verzik } from "./js/mobs/Verzik";
import { Scenario } from "../../sdk/Scenario";

export class VerzikP3 extends Scenario {
  
  getName() {
    return "Verzik Phase 3";
  }

  initialize(region, document) {
    // Add player
    const player = new Player({ x: parseInt(BrowserUtils.getQueryVar("x")) || 17, y: parseInt(BrowserUtils.getQueryVar("y")) || 3});
    region.setPlayer(player);

    // Add mobs
    region.addMob(new Verzik({x: 16, y: 16}, player));
  }
}