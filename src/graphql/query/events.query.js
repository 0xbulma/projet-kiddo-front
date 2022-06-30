import { gql } from "@apollo/client";

export const GET_EVENTS_BASE = gql`
  query Query {
    events {
      _id
      content {
        title
        subtitle
        description
      }
      content_media {
        photo_main_url
      }
      price {
        adult
      }
      event_date {
        start
      }
      adress {
        city
        zip_code
      }
      categories {
        name
      }
      highlighted
    }
  }
`;

export const GET_EVENTS_CATEGORY = gql`
  query Query($filter: String, $filterKey: String, $first: Int, $offset: Int) {
    events(filter: $filter, filterKey: $filterKey, first: $first, offset: $offset) {
      _id
      content {
        title
        subtitle
        description
      }
      content_media {
        photo_main_url
      }
      price {
        adult
      }
      event_date {
        start
      }
      adress {
        city
        zip_code
      }
      categories {
        name
      }
      highlighted
    }
  }
`;

