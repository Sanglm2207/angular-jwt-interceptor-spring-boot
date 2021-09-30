import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../news.service';

@Component({
  selector: 'ngx-action-news',
  templateUrl: './action-news.component.html',
  styleUrls: ['./action-news.component.scss']
})
export class ActionNewsComponent implements OnInit {

  @Input() action: any;
  @Input() news: any;
  isSubmitted: boolean = false;
  formNews: FormGroup;
  lstNews: any[] = [];


  constructor(private modal: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (this.action) {
      this.formNews = this.fb.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
      });
    } else {
      this.formNews = this.fb.group({
        id: [this.news.id],
        title: ['', Validators.required],
        body: ['', Validators.required],
      });
    }
  }

  close(status = true) {
    this.modal.close(status);
  }

  get f() {
    return this.formNews.controls;
  }

  processSaveOrUpdate() {
    this.isSubmitted = true;
    if (this.formNews.valid) {
      this.spinner.show();
      
      if (this.action) {
        this.newsService.createNews(this.formNews.value).subscribe(
          data => {
            this.toastr.success('Thêm mới thành công');
            this.close();
          });
      }
      else {
        
          this.newsService.editNews(this.formNews.value, this.news.id).subscribe(data => {
            console.log(data);
            
            this.toastr.success('Cập nhật thành công !');
            this.close();
          })
      }
    }
  }
}
