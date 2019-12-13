import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService) {}

  public ngOnInit(): void {
    AuthService.getToken();
  }
}
