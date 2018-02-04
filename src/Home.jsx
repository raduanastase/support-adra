// @flow
import React, {PureComponent} from 'react';
import styles from './Home.css';
import 'whatwg-fetch';
import Routes from './Routes';
import ReactPaginate from 'react-paginate';
import paginationStyles from './ReactPaginate.css';
import ThumbnailCaseView from './components/ThumbnailCaseView';

type TypeCase = {
  banner: string,
  case_type: number,
  created_at: string,
  description: string,
  donation_target: string,
  donation_total: string,
  id: number,
  name: string,
  status: string,
  updated_at:string,
};
type TypeState = {
  data: TypeCase[],
  links: {[key: string]: string},
  meta: {
    current_page: number,
    from: number,
    last_page: number,
    path: string,
    per_page: number,
    to: number,
    total: number,
  },
};

export default class Home extends PureComponent<{}, TypeState> {
  state = {
    data: [],
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      path: '',
      per_page: 1,
      to: 1,
      total: 1,
    }
  };

  async componentDidMount() {
    const response = await fetch(Routes.API_CASES);
    const jsonData = await response.json();

    this.setState({...jsonData});
  }

  render() {
    return (
      <div className={styles.App}>
        {this.state.data.map((item: TypeCase, index: number) => (
          <ThumbnailCaseView
            key={index}
            name={item.name}
            description={item.description}
            imagePath={item.banner}/>
        ))}
        <ReactPaginate
          containerClassName={paginationStyles.main}
          pageClassName={paginationStyles.page}
          pageLinkClassName={paginationStyles.link}
          pageCount={this.state.last_page}
          pageRangeDisplayed={5}
          marginPagesDisplayed={10}/>
      </div>
    );
  }
}