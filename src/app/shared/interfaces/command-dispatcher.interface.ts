import { Action } from './action.interface';
import { Observable } from 'rxjs';

export abstract class CommandDispatcher {
  abstract actions$: Observable<Action>;
  abstract fire(action: Action);
}
