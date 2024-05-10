import {Input} from "@angular/core";

export interface Item{
  mainImg   : string;
  imgs      : string[];
  name      : string;
  type      : string;
  description  : string;
  quantity   : number;
  colors: number[];
  properties: ItemProperty[];
  dimensions: number[];
}

export interface ItemProperty{
  name: string;
  value: number | string;
}

export enum ITEM_CATEGORY{
  clothes = "clothes",
  food = "food",
  machines = "machines",
  tools = "tools",
  accessories = "accessories"
}

export interface Section{
  question: string;
  title: string;
  fields: Array<SectionField>;
}

export interface SectionField{
  label: string;
  form_key: string;
  value: any;
  type: string,
  placeholder: string,
  options?: Array<{value: string; name: string;}>,
  multiple?: boolean;
}

//derss
/*
   img, multi img
   name, description
   owner info
   quantity
   type: clothes, food, machine, equipment, software, book
   property is type key and value > for each type we handle some custom prop:
   pages or language for book
   software size or language
*/
