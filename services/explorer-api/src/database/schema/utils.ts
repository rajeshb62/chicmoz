import {
  varchar,
  customType,
  pgTable,
  integer,
  uuid,
  bigint,
  PgColumnBuilderBase,
} from "drizzle-orm/pg-core";
import { ColumnBuilderBaseConfig, ColumnDataType } from "drizzle-orm";

export const generateFrColumn = (name: string) => varchar(name, { length: 66 });

export const generateFrNumberColumn = (name: string) =>
  bigint(name, { mode: "number" });

export const generateAztecAddressColumn = (name: string) =>
  varchar(name, { length: 66 });

export const generateEthAddressColumn = (name: string) =>
  varchar(name, { length: 42 });

export const generateTreeTable = (
  name: string,
  fk: PgColumnBuilderBase<
    ColumnBuilderBaseConfig<ColumnDataType, string>,
    object
  >
) =>
  pgTable(name, {
    id: uuid("id").primaryKey().defaultRandom(),
    root: generateFrColumn("root"),
    nextAvailableLeafIndex: integer("next_available_leaf_index").notNull(),
    fk
  });

export const bufferType = customType<{
  data: Buffer;
  default: false;
}>({
  dataType() {
    return "bytea";
  },
});
