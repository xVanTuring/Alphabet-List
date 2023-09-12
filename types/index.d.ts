declare module "react-alphabet-list" {
  import React from "react";

  export interface AlphabetListProps {
    /**
     * An array of strings or objects. _When it's an array of object, specify the name key of item in `nameKey`_
     */
    data: Array<string | object>;
    /**
     * A function that takes each item sent in the data array and returns the html to display
     * @param item each item from `data`
     * @param index the index of the item
     * @returns The component built from the data
     */
    generateFn: (
      item: any,
      index: number,
    ) => React.Component | React.JSX.Element | React.FC;
    /**
     * A string that tells the name key of one item, `undefined` if data is string array
     */
    nameKey?: string | Symbol | undefined;
    /**
     * A style object. Styles for each alphabet in the alphabet list navigation
     */
    alphabetItemStyle?: React.CSSProperties | undefined;
    /**
     * A style object. Styles for the container of the alphabet list navigation on the right.
     */
    alphabetListStyle?: React.CSSProperties | undefined;
  }
  export const AlphabetList: React.FC<AlphabetListProps>;
  export default AlphabetList;
}
