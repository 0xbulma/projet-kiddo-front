import { gql } from '@apollo/client';

export const GET_UPCOMING_EVENTS = gql`
  query Query($input: complexQueryInput) {
    eventsComplexQuery(input: $input) {
      results {
        _id
        content {
          title
        }
        main_owner {
          _id
        }
        content_media {
          photo_main_url
        }
        price {
          adult
          child
        }
        event_date {
          start
        }
        adress {
          city
          zip_code
          adress_line
        }
        categories {
          name
        }
      }
      count
    }
  }
`;

export const GET_LAST_PUBLISHED_EVENTS = gql`
  query Query($input: complexQueryInput) {
    eventsComplexQuery(input: $input) {
      results {
        _id
        content {
          title
        }
        main_owner {
          _id
        }
        content_media {
          photo_main_url
        }
        price {
          adult
          child
        }
        event_date {
          start
        }
        adress {
          city
          zip_code
          adress_line
        }
        categories {
          name
        }
      }
      count
    }
  }
`;

export const GET_SIGNALMENTS = gql`
  query Query {
    events {
      _id
      signalments {
        _id
        name
      }
    }
  }
`;

export const GET_BY_ID = gql`
  query Query($eventId: ObjectID!) {
    event(id: $eventId) {
      _id
      created_at
      updated_at
      content {
        title
        subtitle
        description
        message
      }
      content_media {
        photos_url
        photo_main_url
        video_url
      }
      group_size
      minChildAge
      maxChildAge
      group_participants {
        user {
          _id
          first_name
          birthdate
          profil_picture
        }
        booked_at
        group_detail {
          isChild
          name
          age
        }
      }
      price {
        child
        adult
      }
      event_date {
        start
        end
      }
      status
      adress {
        city
        zip_code
        adress_line
        adress_line_2
      }
      gps
      categories {
        name
      }
      restrictions {
        name
      }
      main_owner {
        _id
        email
        first_name
        last_name
        birthdate
        profil_picture
        children {
          id
          name
          gender
          age
        }
      }
      co_owners {
        _id
        email
        first_name
        last_name
        birthdate
        profil_picture
        children {
          id
          name
          gender
          age
        }
      }
    }
  }
`;

export const GET_EVENTS_CATEGORY = gql`
  query EventsComplexQuery($input: complexQueryInput) {
    eventsComplexQuery(input: $input) {
      count
      results {
        _id
        content {
          title
          subtitle
        }
        content_media {
          photo_main_url
        }
        price {
          adult
          child
        }
        event_date {
          start
        }
        gps
        adress {
          city
          zip_code
        }
        categories {
          name
        }
        highlighted
      }
      count
    }
  }
`;
