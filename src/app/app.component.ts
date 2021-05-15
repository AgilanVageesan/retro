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
    Style: "card border-success",
  };
  badPoints: RetroType = {
    IdType: 2,
    RetroTitle: "What Went Less Well ?",
    Style: "card border-danger",
  };
  tryNextPoints: RetroType = {
    IdType: 3,
    RetroTitle: "What To Try Next ?",
    Style: "card border-primary",
  };
  puzzlePoints: RetroType = {
    IdType: 4,
    RetroTitle: "What puzzles us?",
    Style: "card border-warning",
  };

  title = "retro";
}
