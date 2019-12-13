import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-select",
  templateUrl: "./custom-select.component.html",
  styleUrls: ["./custom-select.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
