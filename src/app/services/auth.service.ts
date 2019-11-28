import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { WebAuth } from "auth0-js";
import Unsplash from "unsplash-js";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private config = {
    domain: "dev-4ki7wwwi.auth0.com",
    clientID: "RHPc6sFhMUOwVzGzf10a4wS6R6JII710",
    responseType: "token"
  };
  public Auth0: WebAuth;
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
      console.log("test", authResult, err);
      if (authResult && authResult.accessToken) {
        window.location.hash = "";
        const { accessToken, refreshToken, expiresIn } = authResult;
        const expiresAt = expiresIn * 1000 + new Date().getTime();
        localStorage.setItem("session", JSON.stringify(authResult));
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        console.log(expiresAt);
        window.location.href = window.location.origin;
      } else if (err) {
        this.router.navigateByUrl("/auth");
      }
    });
  }

  public logOut(): void {
    // TODO: logout
  }

  public static getToken(): string {
    return localStorage.getItem("accessToken");
  }

  public static isLoggedIn(): boolean {
    const expiresAt = localStorage.getItem("expires_at");
    if (expiresAt) {
      return Date.now() < +expiresAt;
    }
    return false;
  }

  buildAuthentication(): Unsplash {
    var unsplashApi: Unsplash = new Unsplash({
      accessKey:
        "8ad318674f52e5c6b766fe2d4fa5496ed38818604a7358098c581dd107a52181",
      applicationId:
        "8ad318674f52e5c6b766fe2d4fa5496ed38818604a7358098c581dd107a52181",
      secret: "6b02c9b56496572446fdfd1b0c95e47ecfb4870cc126d27ed7e9f3896ae48e6f"
    });

    return unsplashApi;
  }
}
