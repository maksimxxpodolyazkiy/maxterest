import { Action, createAction, props } from "@ngrx/store";
import { Collection } from "../../interfaces/collection.interface";

export const ADD_COLLECTION = "[Collections] Add Collection";

export class AddCollection implements Action {
  public type: string = ADD_COLLECTION;

  constructor(public payload: Collection) {}
}

// export class GetCollectionById implements Action {
//   public type: string = GET_COLLECTION_BY_ID;

//   constructor(public payload: Collection) {}
// }

export type Action = AddCollection;
