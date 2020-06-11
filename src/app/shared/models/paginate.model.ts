export interface PaginateModel {
    page: number;
    size: number;
    totalPages: number;
    column?: string;
    sort?: 'ASC' | 'DESC';
    predicat?: any;
}
