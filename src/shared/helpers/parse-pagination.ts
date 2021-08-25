import {Injectable, Scope} from '@nestjs/common';
import {Pagination} from 'src/shared/models/pagination';
import {DEFAULT_SKIP, DEFAULT_TAKE} from 'src/shared/constants';

@Injectable({
  scope: Scope.DEFAULT
})
export class ParsePagination {
  pagination: Pagination;

  parsePagination(paginationRaw: any): Pagination {

    this.pagination = new Pagination();

    this.pagination.skip = paginationRaw?.skip ? parseInt(paginationRaw?.skip) : DEFAULT_SKIP;
    this.pagination.take = paginationRaw?.take ? parseInt(paginationRaw?.take) : DEFAULT_TAKE;

    if (paginationRaw?.orderBy && Object.keys(JSON.parse(paginationRaw.orderBy)).length)
      this.pagination.orderBy = JSON.parse(paginationRaw.orderBy);

    if (paginationRaw.where && Object.keys(JSON.parse(paginationRaw.where)).length)
      this.pagination.where = JSON.parse(paginationRaw.where);

    if (paginationRaw.include && Object.keys(JSON.parse(paginationRaw.include)).length)
      this.pagination.include = JSON.parse(paginationRaw.include);

    if (paginationRaw.select && Object.keys(JSON.parse(paginationRaw.select)).length)
      this.pagination.select = JSON.parse(paginationRaw.select);

    return this.pagination;
  }
}
