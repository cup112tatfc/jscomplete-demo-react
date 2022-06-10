import { item } from "../types/type.item";

export const dataMenu: item[] = [
  {
    id: 1,
    name: "item_1",
    subItems: [
      {
        id: 1,
        name: "sub_item_1_1",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_1_1" }],
      },
      {
        id: 2,
        name: "sub_item_1_2",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_2_1" }],
      },
      {
        id: 3,
        name: "sub_item_1_3",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_3_1" }],
      },
    ],
  },
  {
    id: 2,
    name: "item_2",
    subItems: [],
  },
  {
    id: 3,
    name: "item_3",
    subItems: [
      {
        id: 1,
        name: "sub_item_3_1",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_1_1" }],
      },
      {
        id: 2,
        name: "sub_item_3_2",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_2_1" }],
      },
      {
        id: 3,
        name: "sub_item_3_3",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_3_1" }],
      },
    ],
  },
  {
    id: 4,
    name: "item_4",
    subItems: [
      {
        id: 1,
        name: "sub_item_4_1",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_1_1" }],
      },
      {
        id: 2,
        name: "sub_item_4_2",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_2_1" }],
      },
      {
        id: 3,
        name: "sub_item_4_3",
        megaSubItems: [{ id: 1, name: "Mega_sub_item_3_1" }],
      },
    ],
  },
];
