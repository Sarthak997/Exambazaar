import React from "react";

import { List } from "./List";

export function Home({ data }) {
  return data ? (
    <div>
      <List title="Exams" data={data.exams} showButton />
      <List title="Streams" data={data.streams} />
    </div>
  ) : (
    <div>Loading ...</div>
  );
}
