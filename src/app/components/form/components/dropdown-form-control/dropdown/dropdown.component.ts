import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  public isOpened: boolean = false;
  @Input() public values: string[];
  @Input() public selectedValue: string;
  @Output() public getSelectedName: EventEmitter<string> = new EventEmitter();

  public openDropdown(): void {
    this.isOpened = !this.isOpened;
  }

  public selectSub(e): void {
    this.getSelectedName.emit(e.target.innerText);
    this.isOpened = false;
  }
}
