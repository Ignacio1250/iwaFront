import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RestService } from "../../services/rest.service";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  statusRecarga = false;
  danger = false;
  onSubmit(f: NgForm) {
    if (f.value) {
      this.danger = true;
      this.statusRecarga = false;
    }
    if (f.status !== "INVALID") {
      this.danger = false;
      this.restService.recargar(f.value).subscribe((data: any) => {
        if (data.code === 200) {
          this.statusRecarga = true;
        }
      });
    }
  }

  constructor(private restService: RestService) {}

  ngOnInit() {}
}
