import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.componentNew.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Tour of Heroes";
  chips = ["Coca Cola", "Sprite", "Rivella"];
}
