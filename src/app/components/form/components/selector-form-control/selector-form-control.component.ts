import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-selector-form-control",
  templateUrl: "./selector-form-control.component.html",
  styleUrls: ["./selector-form-control.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorFormControlComponent),
      multi: true
    }
  ]
})
export class SelectorFormControlComponent implements ControlValueAccessor {
  @Input() public values: number[];
  @Input() public selectedNumber: number;
  public onChange: (val: number) => void;
  public onTouched: () => void;

  public writeValue(value: number): void {
    if (value && value > 0) {
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
