import { Action, createAction, props } from "@ngrx/store";

export const ADD_COLLECTION = "[Collections] Add Collection";
export const GET_ALL_COLLECTIONS = "[Collections] Get All Collections";
export const GET_COLLECTION = "[Collections] Get Collection";
export const ADD_PHOTOS_TO_COLLECTION =
  "[Collections] Add photos to collection";

// export class AddCollection implements Action {
//   public type: string = ADD_COLLECTION;

//   constructor(public payload: Collection) {}
// }

export const AddCollection = createAction(
  ADD_COLLECTION,
  props<{ id: number; name?: string; urls: string[] }>()
);

export class AddPhotosToCollection implements Action {
  public type: string = ADD_PHOTOS_TO_COLLECTION;

  constructor(public payload: { id: number; urls: string[] }) {}
}

export type Action = AddPhotosToCollection;
