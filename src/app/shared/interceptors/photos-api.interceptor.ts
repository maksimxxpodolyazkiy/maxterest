import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PhotosInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("https://api.unsplash.com/search/")) {
      const authReq = req.clone({
        headers: req.headers.set("authorization", environment.clientId)
      });
      return next.handle(authReq);
    }
    return;
  }
}
