import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobStatusEnum } from '../../../models/data-layer/job-status.enum';
import { MatIconModule } from '@angular/material/icon';
import { NgSwitch, NgSwitchCase, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-job-status',
    templateUrl: './job-status.component.html',
    styleUrls: ['./job-status.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgSwitch, NgSwitchCase, MatIconModule, UpperCasePipe]
})
export class JobStatusComponent{
  @Input() status: JobStatusEnum;

  JobStatusEnum = JobStatusEnum;
}
