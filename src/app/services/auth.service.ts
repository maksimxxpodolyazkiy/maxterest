import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { WebAuth } from "auth0-js";
import Unsplash from "unsplash-js";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public static getToken(): string {
    return localStorage.getItem("accessToken");
  }

  public static isLoggedIn(): boolean {
    const expiresAt = localStorage.getItem("expiresAt");
    if (expiresAt) {
      return Date.now() < +expiresAt;
    }
    return false;
  }

  public Auth0: WebAuth;

  private config: object = {
    domain: "dev-4ki7wwwi.auth0.com",
    clientID: "RHPc6sFhMUOwVzGzf10a4wS6R6JII710",
    responseType: "token"
  };

  constructor(private router: Router) {
    this.Auth0 = new WebAuth(this.config);
  }

  public login(): void {
    this.Auth0.authorize({
      ...this.config,
      redirectUri: `${window.location.origin}/callback`
    });
  }

  public handleWebAuthentication(): void {
    this.Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = "";
        const { accessToken, refreshToken, expiresIn } = authResult;
        const expiresAt = expiresIn * 1000 + new Date().getTime();
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        localStorage.setItem("expiresAt", expiresAt.toString());
        window.location.href = window.location.origin;
      } else if (err) {
        this.router.navigateByUrl("/auth");
      }
    });
  }
}
