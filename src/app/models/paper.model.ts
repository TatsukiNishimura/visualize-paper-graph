export interface Paper {
    id: number;
    title: string;
    authors: string;
    publication_year: number;
    abstract: string;
    doi: string;
    citations: number[];
    paper_url: string;
}
