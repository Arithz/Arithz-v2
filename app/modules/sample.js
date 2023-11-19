const collections = [
  "first collection",
  "second collection",
  "third collection",
  "fourth collection",
];

const firstCollection = [
  {
    name: "Personal",
    visibility: "true",
    created_at: "2020-01-01",
    subcollections: [
      {
        name: "first subcollection",
        id: "firstsubcollection",
        visibility: "true",
        created_at: "2020-01-01",
        pages: [
          {
            id: "aaa",
            name: "first page",
            visiblity: "true",
          },
          {
            id: "bbb",
            name: "second page",
            visiblity: "false",
          },
        ],
      },
      {
        name: "second subcollection",
        id: "first collection",
        visibility: "private",
        created_at: "2020-01-01",
        pages: [
          {
            id: "ccc",
            name: "first page",
            visiblity: "public",
          },
          {
            name: "second page",
            visiblity: "private",
          },
        ],
      },
    ],
  },
];

// const firstSubcollection = [
//   {
//     name: "first subcollection",
//     visibility: "public",
//     created_at: "2020-01-01",
//     updated_at: "2020-01-01",
//     pages: [
//       {
//         name: "first page",
//         updated_at: "2020-01-01",
//         visiblity: "public",
//         topic: "webgl",
//       },
//       {
//         name: "second page",
//         created_at: "2020-01-01",
//         visiblity: "private",
//         topic: "webgl",
//       },
//     ],
//   },
// ];

const firstPage = {
  id: "aaa",
  name: "first page",
  visibility: true,
  created_at: "2020-01-01",
  updated_at: "2020-01-01",
  topic: "webgl",
  content: {},
};
