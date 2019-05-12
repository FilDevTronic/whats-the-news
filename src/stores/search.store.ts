import { action, observable } from "mobx";
import { debounce } from "lodash";

class SearchStore {
  @observable query = "";
  @observable page = 0;
  @observable pagesTotal = 0;
  @observable hitsPerPage = 20;
  @observable hits: HNHit[] = [];
  @observable isLoading = true;
  @observable isFetching = true;
  private fetchNewsDebounced: () => void;

  constructor() {
    this.fetchNews();

    this.fetchNewsDebounced = debounce(this.fetchNews, 500);
  }

  @action
  getUrl = (): string => {
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
  fetchNews = (): void => {
    this.isFetching = true;
    fetch(this.getUrl())
      .then(
        (response: Response): Promise<HNProps> => {
          return response.json();
        }
      )
      .then(
        action(
          (data: HNProps): void => {
            (this.page = data.page),
              (this.pagesTotal = data.nbPages),
              (this.hits = data.hits);
          }
        )
      )
      .finally(
        (): void => {
          setTimeout((): boolean => (this.isFetching = false), 500);
          this.isLoading = false;
        }
      );
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
  updateQuery = (value: string): void => {
    this.query = value;
    this.fetchNewsDebounced();
  };

  @action
  cancel = (): void => {
    this.query = "";
  };
}

export const searchStore = new SearchStore();
