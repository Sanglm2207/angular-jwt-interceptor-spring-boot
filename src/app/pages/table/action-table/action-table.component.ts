import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TableService } from '../table.service';

@Component({
  selector: 'ngx-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss']
})
export class ActionTableComponent implements OnInit {


  @Input() action: any;
  @Input() table: any;
  isSubmitted: boolean = false;
  formTable: FormGroup;
  lstTable: any[] = [];

  constructor(private modal: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private tableService: TableService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (this.action) {
      this.formTable = this.fb.group({
        tableNumber: ['', Validators.required],
        seating: ['', Validators.required],
        location: ['', Validators.required],
        posivition: ['', Validators.required],
        status: [false, Validators.required],
      });
    } else {
      this.formTable = this.fb.group({
        id: [this.table.id],
        tableNumber: [this.table.tableNumber, Validators.required],
        seating: [this.table.seating, Validators.required],
        location: [this.table.location, Validators.required],
        posivition: [this.table.posivition, Validators.required],
        status: [false, Validators.required],

      });
    }
  }

  close(status = true) {
    this.modal.close(status);
  }

  get f() {
    return this.formTable.controls;
  }




  processSaveOrUpdate() {
    this.isSubmitted = true;
    if (this.formTable.valid) {
      this.spinner.show();
      if (this.action) {
        this.tableService.createTable(this.formTable.value).subscribe(
          data => {
            this.toastr.success('Th??m m???i th??nh c??ng');
            this.close();
          });
      }
      else {
        this.tableService.editTable(this.formTable.value, this.table.id).subscribe(data => {
          this.toastr.success('C???p nh???t th??nh c??ng !');
          this.close();
        })
      }
    }
  }

}
