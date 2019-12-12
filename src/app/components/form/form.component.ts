import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public dropdownState: string[] = ["Primary", "Medium", "Premium"];
  public selectorState: number[] = [1, 2, 3, 4];
  public selectedSub: string = "Subscription";
  public selectedNumber: number = 2;

  public profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    dropdown: new FormControl(""),
    selector: new FormControl("")
  });

  public updateSelectorValue(newValue: number): void {
    this.profileForm.patchValue({ selector: newValue });
  }

  public ngOnInit(): void {
    this.updateSelectorValue(2);
    this.profileForm.valueChanges.subscribe(value => console.log(value));
  }

  public onSubmit(): void {
    this.profileForm.patchValue({
      dropdown: "Subscription",
      selector: 2
    });
  }

  public getSelectedName(selected): void {
    this.selectedSub = selected;
  }
}
