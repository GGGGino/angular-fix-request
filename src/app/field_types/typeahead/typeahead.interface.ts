import { Observable } from 'rxjs';

export type TypeaheadSuggestions = string[] | object[] | Observable<string[]> | Observable<object[]>;

export interface TypeaheadSettings {
  /** delay of input type debounce */
  typeDelay: number;
  /** maximal number of visible items */
  suggestionsLimit: number;
  /** text shown when there are no matches */
  noMatchesText: string;

  tagClass: string;
  tagRemoveIconClass: string;
  dropdownMenuClass: string;
  dropdownMenuExpandedClass: string;
  dropdownMenuItemClass: string;
  dropdownToggleClass: string;
}
