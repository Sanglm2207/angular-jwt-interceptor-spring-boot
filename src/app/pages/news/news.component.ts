import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, PrimeNGConfig, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DEFAULT_MODAL_OPTIONS } from '../../@core/app-config';
import { ActionNewsComponent } from './action-news/action-news.component';
import { News } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'ngx-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsDialog: boolean;

  news: News[];
  news1: News;

  selectedNews: News[];

  submitted: boolean;


  ref: DynamicDialogRef;
  
  constructor(private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private toastr: ToastrService,
    public messageService: MessageService,
    public dialogService: DialogService,
    public newsService: NewsService,
    private modal: NgbModal) { }

  ngOnInit(): void {
    this.getAllNews();
    this.primengConfig.ripple = true;
  }

  public getAllNews(): void {
    this.newsService.getAllNews().subscribe(data => {
      this.news = data;
    }, error => {
      console.log(error);
    });
  }

  processSave($event: any) {
    const modalRef = this.modal.open(ActionNewsComponent, DEFAULT_MODAL_OPTIONS);
    modalRef.componentInstance.action = true;
    modalRef.result.then(value => {
      if (value) {
        this.getAllNews();
      }
    });
  }
}
