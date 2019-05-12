import { action, observable } from "mobx";

class SearchStore {
  @observable query = "";
  @observable page = 0;
  @observable pagesTotal = 0;
  @observable hitsPerPage = 10;
  @observable hits: HNHit[] = [];
  @observable isLoading = true;
  @observable isFetching = true;

  constructor() {
    this.fetchNews();
  }

  @action
  getUrl = (): any => {
    if (this.query === "") {
      return `http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${
        this.page
      }&hitsPerPage=${this.hitsPerPage}`;
    } else {
      return `https://hn.algolia.com/api/v1/search?query=${this.query}&page=${
        this.page
      }&hitsPerPage=${this.hitsPerPage}`;
    }
  };

  @action
  fetchNews = (): any => {
    fetch(this.getUrl())
      .then(
        (response: Response): Promise<HNProps> => {
          return response.json();
        }
      )
      .then(
        action(
          (data: HNProps): any => {
            (this.page = data.page),
              (this.pagesTotal = data.nbPages),
              (this.hits = data.hits);
          }
        )
      )
      .finally(
        (): void => {
          setTimeout((): boolean => (this.isFetching = false), 500);
        }
      );
    this.isLoading = false;
  };

  @action
  nextPage = (): void => {
    this.page += 1;
    this.fetchNews();
  };

  @action
  prevPage = (): void => {
    this.page > 1 ? (this.page -= 1) : (this.page = 0);
    this.fetchNews();
  };

  @action
  updateQuery = (value: string): any => {
    this.query = value;
    this.fetchNews();
  };
}

export const searchStore = new SearchStore();

console.log(searchStore);
