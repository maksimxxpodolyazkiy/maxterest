import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "form.component.html",
  styleUrls: ["./form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  public dropdownState: string[] = ["Primary", "Medium", "Premium"];
  public selectorState: number[] = [1, 2, 3, 4];

  public profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    dropdown: new FormControl(""),
    selector: new FormControl("")
  });

  public updateValue(newDropdownValue: string, newSelectorValue: number): void {
    this.profileForm.patchValue({
      dropdown: newDropdownValue,
      selector: newSelectorValue
    });
  }

  public ngOnInit(): void {
    this.updateValue("Medium", 2);
    this.profileForm.valueChanges.subscribe(value => console.log(value));
  }

  public onSubmit(): void {}
}
