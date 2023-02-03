import {
  UseFiltersInstanceProps,
  UseGlobalFiltersInstanceProps,
  UsePaginationInstanceProps,
} from 'react-table'


  export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersInstanceProps<D >,
      UseGlobalFiltersInstanceProps<D>,
      UsePaginationInstanceProps<D> {}
