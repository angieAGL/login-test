import {
  TableInstance,
  UseFiltersInstanceProps,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
  UseGlobalFiltersState,
  UsePaginationInstanceProps,
  UsePaginationState,
  UseTableHooks,
} from "react-table";

export type TableInterface<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseGlobalFiltersOptions<T> &
  UseFiltersInstanceProps<T> &
  UseGlobalFiltersInstanceProps<T> &
  UseTableHooks<T> & {
    state: UsePaginationState<T> & UseGlobalFiltersState<T>;
  };
