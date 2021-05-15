import { Component, Input, OnInit } from "@angular/core";
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalOptions,
} from "@ng-bootstrap/ng-bootstrap";
import { RetroType } from "../retroType";
import { RetroPoint } from "./retropoints";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() retroInput: RetroType;
  currentPoint: string = "";
  retroPoints: Array<RetroPoint> = [];
  currentRetroPoint: RetroPoint;

  closeResult: string;
  modalOptions: NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: "static",
      backdropClass: "customBackdrop",
    };
  }

  ngOnInit(): void {
    this.AddDummyValue();
  }

  AddDummyValue() {
    for (let index = 0; index < 5; index++) {
      let newPoint: RetroPoint = {
        Id: this.retroPoints.length + 1,
        Text: this.retroInput.RetroTitle + index,
      };
      this.retroPoints.push(newPoint);
    }
  }

  AddNewPoint() {
    if (this.currentPoint.length > 0) {
      let newPoint: RetroPoint = {
        Id: this.retroPoints.length + 1,
        Text: this.currentPoint,
      };
      this.retroPoints.push(newPoint);
    }
  }

  open(content, retroPointId) {
    this.modalService.open(content, this.modalOptions).result.then(
      (result) => {
        if (result === 0) {
          const index = this.retroPoints.findIndex(
            (x) => x.Id == this.currentRetroPoint.Id
          );
          this.retroPoints.splice(index, 1);
        } else {
          const index = this.retroPoints.findIndex((x) => x.Id == result.Id);
          this.retroPoints[index].Text = this.currentRetroPoint.Text;
        }
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    this.currentRetroPoint = this.retroPoints.find((x) => x.Id == retroPointId);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
