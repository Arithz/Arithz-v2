const collections = [
  "first collection",
  "second collection",
  "third collection",
  "fourth collection",
];

const firstCollection = [
  {
    name: "first subcollection",
    id: "first collection",
    visibility: "public",
    created_at: "2020-01-01",
    subcollections: [
      {
        name: "first subcollection",
        visibility: "public",
      },
      {
        name: "second subcollection",
        visibility: "private",
      },
    ],
  },
];

const firstSubcollection = [
  {
    name: "first subcollection",
    visibility: "public",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    pages: [
      {
        name: "first page",
        updated_at: "2020-01-01",
        visiblity: "public",
        topic: "webgl",
      },
      {
        name: "second page",
        created_at: "2020-01-01",
        visiblity: "private",
        topic: "webgl",
      },
    ],
  },
];

const firstPage = {
  name: "first page",
  visibility: "public",
  created_at: "2020-01-01",
  updated_at: "2020-01-01",
  topic: "webgl",
  content: {},
};
