/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
  const s: { [className: string]: string };
  export default s;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema;
}
