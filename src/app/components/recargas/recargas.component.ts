import { Component, OnInit, ViewChild } from "@angular/core";
import { RestService } from "../../services/rest.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as d3 from "d3";

@Component({
  selector: "app-recargas",
  templateUrl: "./recargas.component.html",
  styleUrls: ["./recargas.component.css"]
})
export class RecargasComponent implements OnInit {
  @ViewChild("nvd3") private nvd3: any;
  periodos: any;
  records: Metadata[] = [];
  options: any;
  data: any;
  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getPeriodos();
    this.options = {
      chart: {
        type: "discreteBarChart",
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d) {
          return d.label;
        },
        y: function(d) {
          return d.value;
        },
        showValues: true,
        valueFormat: function(d) {
          return d3.format(",d")(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: "Montos"
        },
        yAxis: {
          axisLabel: "Cantidad de recargas",
          axisLabelDistance: -10
        }
      }
    };
  }
  ngOnInit() {}
  getPeriodos() {
    this.rest.getRecargas().subscribe(data => {
        this.records.length = 0;
      this.periodos = data;
      this.periodos.forEach(element => {
        this.records.push({ label: element.tarifa, value: element.cantidad });
      });
      this.data = [
        {
          key: "Cumulative Return",
          values: this.records
        }
      ];
    });
  }

  filtrado(amount: number) {
    this.records.length = 0;
    this.rest.getRecargasbyAmount(amount).subscribe((data: any) => {
      data.forEach(element => {
        this.records.push({
          label: element.nombre,
          value: element.totalRecargas
        });
      });
      this.data.values = this.records;
      console.log(this.nvd3);
      this.nvd3.ngNvD3.chart.xAxis.axisLabel("Compañias");
      this.nvd3.ngNvD3.chart.yAxis.axisLabel(`Cantidad de recargas de $ ${amount} pesos`);
      this.nvd3.ngNvD3.chart.update();
    });
  }

}
interface Metadata {
  label: string;
  value: number;
}
