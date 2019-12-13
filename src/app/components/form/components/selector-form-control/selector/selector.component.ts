import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorComponent {
  @Input() public values: number[];
  @Input() public selectedNumber: number;
  @Output() public onChanged: EventEmitter<number> = new EventEmitter<number>();

  public onSelect(e): void {
    this.onChanged.emit(+e.target.innerText);
  }
}
