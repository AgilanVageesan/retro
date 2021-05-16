import { Component } from "@angular/core";
import { RetroType } from "./retroType";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  goodPoints: RetroType = {
    IdType: 1,
    RetroTitle: "What Went Well ?",
    CardStyle: "cardGreen",
    ContentStyle:"contentGreen"
  };
  badPoints: RetroType = {
    IdType: 2,
    RetroTitle: "What Went Less Well ?",
    CardStyle: "cardYellow",
    ContentStyle:"contentYellow"
  };
  tryNextPoints: RetroType = {
    IdType: 3,
    RetroTitle: "What To Try Next ?",
    CardStyle: "cardPurple",
    ContentStyle:"contentPurple"
  };
  puzzlePoints: RetroType = {
    IdType: 4,
    RetroTitle: "What puzzles us?",
    CardStyle: "cardBlue",
    ContentStyle:"contentBlue"
  };

  title = "retro";
}
