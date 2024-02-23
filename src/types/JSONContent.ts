//https://github.com/yousufkalim/html-to-json/blob/main/src/types/JSONContent.ts
/**
 * JSONContent Interface
 * @author Yousuf Kalim
 */
export default interface JSONContent {
  type: string;
  attributes?: object;
  content: Array<string | JSONContent>;
}
