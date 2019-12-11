import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(private auth: AuthService) {}
  public ngOnInit(): void {
    this.isLoggedIn = AuthService.isLoggedIn();
  }
}
