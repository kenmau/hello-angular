import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) form: NgForm;

  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSubscription = "Advanced";
  data = {
    email: "",
    subscription: "",
    password: "",
  };

  submitted = false;

  onSubmit() {
    this.data.email = this.form.value.email;
    this.data.subscription = this.form.value.subscription;
    this.data.password = this.form.value.password;
    this.submitted = true;
  }
}
