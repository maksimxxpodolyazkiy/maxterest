import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"]
})
export class SelectorComponent {
  @Input() public values: number[];
  public viewValue: number;
  @Output() public onChanged: EventEmitter<number> = new EventEmitter<number>();

  public onSelect(e): void {
    this.onChanged.emit(+e.target.innerText);
    this.viewValue = +e.target.innerText;
  }
}
