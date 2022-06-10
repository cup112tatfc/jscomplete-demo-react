export type item = {
  id: string | number;
  name: string;
  subItems: subItem[] | undefined;
};
export type subItem = {
  id: number | string;
  name: string;
  megaSubItems: megaSub[] | undefined;
};
export type megaSub = {
  id: number | string;
  name: string;
};
