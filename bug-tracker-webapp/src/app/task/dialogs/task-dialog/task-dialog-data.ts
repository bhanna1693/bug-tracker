import {Crud} from "../../../models/crud.enum";
import {Task} from 'src/app/models/task';

export interface TaskDialogData {
  crudType: Crud,
  task?: Task
}
