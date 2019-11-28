import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService) {}

  public ngOnInit(): void {
    AuthService.getToken();
  }
}
