import { parseJsx } from '../parsers/jsx';

export const parseNode = (str: string) => {
  return parseJsx(`
    export default function MyCompoennt() {
      return (${str})
    }
  `).children[0];
};
export const parseNodes = (str: string) => {
  return parseJsx(`
    export default function MyCompoennt() {
      return (<>${str}</>)
    }
  `).children[0].children;
};
