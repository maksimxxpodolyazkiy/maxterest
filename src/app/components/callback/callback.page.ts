import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.page.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackPage implements OnInit {
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.handleWebAuthentication();
  }
}
