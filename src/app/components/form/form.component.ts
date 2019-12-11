import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {
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

  public onSubmit(): void {
    console.log(this.profileForm.patchValue);
  }

  public getSelectedName(selected): void {
    this.selectedSub = selected;
  }
}
