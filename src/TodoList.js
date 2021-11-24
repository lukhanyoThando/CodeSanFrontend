import * as React from "react";
import { List, Datagrid, TextField, BooleanField } from "react-admin";

export const TodoList = (props) => (
  <List {...props} sort={{ field: "id", order: "DESC" }}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="commentable" />
    </Datagrid>
  </List>
);
