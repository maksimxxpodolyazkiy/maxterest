import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-dropdown-form-control",
  templateUrl: "./dropdown-form-control.component.html",
  styleUrls: ["./dropdown-form-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownFormControlComponent),
      multi: true
    }
  ]
})
export class DropdownFormControlComponent implements ControlValueAccessor {
  @Input() public values: string;
  @Input() public selectedSub: string;
  public onChange: (val: string) => void;
  public onTouched: () => void;

  public writeValue(value: string): void {
    this.selectedSub = value;
  }

  public onDropdownChange(value: string): void {
    if (value && value.length) {
      this.onChange(value);
    } else {
      return;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
