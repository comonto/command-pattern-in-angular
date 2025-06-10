import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { JobsService } from '../../services/jobs.service';
import { UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserModel } from '../../models/presentation-layer/user.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { JobUserAssignDialogDataModel } from './models/job-user-assign-dialog-data.model';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-job-user-assign-dialog',
    templateUrl: './job-user-assign-dialog.component.html',
    styleUrls: ['./job-user-assign-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        NgFor,
        MatOptionModule,
        MatButtonModule,
    ],
})
export class JobUserAssignDialogComponent implements OnInit {
  formGroup = new UntypedFormGroup({
    userId: new UntypedFormControl(),
  });

  availableUsers: UserModel[];

  constructor(
    private usersService: UsersService,
    private jobsService: JobsService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private dialogData: JobUserAssignDialogDataModel,
    private dialogRef: MatDialogRef<JobUserAssignDialogComponent>
  ) {
  }

  ngOnInit(): void {
    this.usersService.readList$()
      .pipe(
        take(1),
      )
      .subscribe(availableUsers => {
        this.availableUsers = availableUsers;
        this.formGroup.get('userId').setValue(availableUsers[0].id);
        this.changeDetectorRef.markForCheck();
      });
  }

  submit(): void {
    this.jobsService.setUser(this.dialogData.jobId, this.formGroup.value.userId)
      .subscribe(() => {
        this.dialogRef.close(this.availableUsers.find(user => user.id === this.formGroup.value.userId));
      });
  }

}
