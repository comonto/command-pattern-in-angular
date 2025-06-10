import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogDataModel } from './models/confirmation-dialog-data.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatDialogModule, MatButtonModule]
})
export class ConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogDataModel) { }
}
