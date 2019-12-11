import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.page.html"
})
export class CallbackPage implements OnInit {
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.handleWebAuthentication();
  }
}
