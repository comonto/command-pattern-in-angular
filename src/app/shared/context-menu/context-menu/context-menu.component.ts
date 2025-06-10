import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContextMenuActionModel } from '../models/context-menu-action.model';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, MatIconModule, NgFor, NgIf]
})
export class ContextMenuComponent<T> {
  @Input() actions: ContextMenuActionModel<T>[];
  @Input() actor: T;
}
