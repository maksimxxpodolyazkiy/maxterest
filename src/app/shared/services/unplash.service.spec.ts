import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { UnsplashService } from "./unsplash.service";

const searchTextArray: string = "house";

describe("UnsplashService", () => {
  let injector: TestBed;
  let service: UnsplashService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UnsplashService]
    });

    injector = getTestBed();
    service = injector.get(UnsplashService);
    httpMock = injector.get(HttpTestingController);
  });

  it("Should return observable of http.get method", () => {
    service = TestBed.get(UnsplashService);
    expect(service.getPhotosFromUnsplash(searchTextArray)).not.toBeNull();
  });

  afterEach(() => {
    httpMock.verify();
  });
});
