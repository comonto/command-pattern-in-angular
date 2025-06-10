import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobModel } from '../../../models/presentation-layer/job.model';
import { ContextMenuActionModel } from '../../context-menu/models/context-menu-action.model';
import { ContextMenuComponent } from '../../context-menu/context-menu/context-menu.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { JobStatusComponent } from '../job-status/job-status.component';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-jobs-table',
    templateUrl: './jobs-table.component.html',
    styleUrls: ['./jobs-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatTableModule,
        JobStatusComponent,
        NgIf,
        RouterLink,
        ContextMenuComponent,
    ],
})
export class JobsTableComponent {
  @Input() jobs: JobModel[];
  @Input() actions: ContextMenuActionModel<JobModel>[];

  displayedColumns = ['name', 'status', 'assignedUser', 'actions'];
}
