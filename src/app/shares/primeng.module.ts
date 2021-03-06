import { NgModule } from "@angular/core";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {PasswordModule} from 'primeng/password';
import {ChartModule} from 'primeng/chart';


const modules = [
    DropdownModule,
    InputTextModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TooltipModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    ToastModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputTextareaModule,
    TagModule,
    PanelModule,
    ConfirmDialogModule,
    InputSwitchModule,
    DynamicDialogModule,
    PasswordModule,
    ChartModule
]

@NgModule({
    imports: [...modules],
    exports: [...modules],
    providers: [MessageService]
  })
  export class PrimengModule { }