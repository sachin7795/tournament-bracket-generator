import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

    @Input('headers') headers: string[] = [];
    @Input('data') data: any[] = [];
    @Output('edit') edit: EventEmitter<any> = new EventEmitter();
    @Output('view') view: EventEmitter<any> = new EventEmitter();
    @Output('delete') delete: EventEmitter<any> = new EventEmitter();

    constructor() {}

    editEntity(entity: any) {
      this.edit.emit(entity);
    }

    viewEntity(entity: any) {
      this.view.emit(entity);
    }

    deleteEntity(entity: any) {
      this.data = this.data.filter(o=>o.metaData.id!=entity.metaData.id);
      this.delete.emit(entity);
    }

}
