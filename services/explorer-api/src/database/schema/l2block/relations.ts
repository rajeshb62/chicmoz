import { relations } from "drizzle-orm";

import {
  body,
  functionLogs,
  logs,
  publicDataWrite,
  txEffect,
  txEffectToLogs,
} from "./body.js";
import {
  contentCommitment,
  gasFees,
  globalVariables,
  header,
  l1ToL2MessageTree,
  lastArchive,
  noteHashTree,
  nullifierTree,
  partial,
  publicDataTree,
  state,
} from "./header.js";
import { archive, l2Block } from "./root.js";

export const l2BlockRelations = relations(l2Block, ({ one }) => ({
  archive: one(archive, {
    fields: [l2Block.hash],
    references: [archive.fk],
  }),
  header: one(header, {
    fields: [l2Block.hash],
    references: [header.blockHash],
  }),
  body: one(body, {
    fields: [l2Block.hash],
    references: [body.blockHash],
  }),
}));

export const archiveRelations = relations(archive, ({ one }) => ({
  l2Block: one(l2Block),
}));

export const headerRelations = relations(header, ({ one }) => ({
  l2Block: one(l2Block),
  lastArchive: one(lastArchive, {
    fields: [header.id],
    references: [lastArchive.fk],
  }),
  contentCommitment: one(contentCommitment, {
    fields: [header.id],
    references: [contentCommitment.headerId],
  }),
  state: one(state, {
    fields: [header.id],
    references: [state.headerId],
  }),
  globalVariables: one(globalVariables, {
    fields: [header.id],
    references: [globalVariables.headerId],
  }),
}));

export const lastArchiveRelations = relations(lastArchive, ({ one }) => ({
  header: one(header),
}));

export const contentCommitmentRelations = relations(
  contentCommitment,
  ({ one }) => ({
    header: one(header),
  })
);

export const stateRelations = relations(state, ({ one }) => ({
  header: one(header),
  l1ToL2MessageTree: one(l1ToL2MessageTree, {
    fields: [state.id],
    references: [l1ToL2MessageTree.fk],
  }),
  partial: one(partial, {
    fields: [state.id],
    references: [partial.stateId],
  }),
}));

export const l1ToL2MessageTreeRelations = relations(
  l1ToL2MessageTree,
  ({ one }) => ({
    state: one(state),
  })
);

export const partialRelations = relations(partial, ({ one }) => ({
  state: one(state),
  noteHashTree: one(noteHashTree, {
    fields: [partial.id],
    references: [noteHashTree.fk],
  }),
  nullifierTree: one(nullifierTree, {
    fields: [partial.id],
    references: [nullifierTree.fk],
  }),
  publicDataTree: one(publicDataTree, {
    fields: [partial.id],
    references: [publicDataTree.fk],
  }),
}));

export const noteHashTreeRelations = relations(noteHashTree, ({ one }) => ({
  partial: one(partial),
}));

export const nullifierTreeRelations = relations(nullifierTree, ({ one }) => ({
  partial: one(partial),
}));

export const publicDataTreeRelations = relations(publicDataTree, ({ one }) => ({
  partial: one(partial),
}));

export const globalVariablesRelations = relations(
  globalVariables,
  ({ one }) => ({
    header: one(header),
    gasFees: one(gasFees, {
      fields: [globalVariables.id],
      references: [gasFees.globalVariablesId],
    }),
  })
);

export const gasFeesRelations = relations(gasFees, ({ one }) => ({
  globalVariables: one(globalVariables),
}));

export const bodyRelations = relations(body, ({ one, many }) => ({
  l2Block: one(l2Block),
  bodyToTxEffects: many(txEffect),
}));

export const txEffectRelations = relations(txEffect, ({ one, many }) => ({
  bodyToTxEffects: one(body),
  publicDataWrite: many(publicDataWrite),
  functionLogs: many(functionLogs),
  txEffectToLogs: many(txEffectToLogs),
}));

export const publicDataWriteRelations = relations(
  publicDataWrite,
  ({ one }) => ({
    txEffect: one(txEffect),
  })
);

export const logsRelations = relations(logs, ({ many }) => ({
  txEffectToLogs: many(txEffectToLogs),
}));

export const functionLogsRelations = relations(functionLogs, ({ many }) => ({
  txEffectToLogs: many(txEffectToLogs),
}));

export const txEffectToLogsRelations = relations(txEffectToLogs, ({ one }) => ({
  txEffect: one(txEffect, {
    fields: [txEffectToLogs.txEffectHash],
    references: [txEffect.hash],
  }),
  log: one(logs, {
    fields: [txEffectToLogs.id],
    references: [logs.txEffectToLogsId],
  }),
  functionLog: one(functionLogs, {
    fields: [txEffectToLogs.id],
    references: [functionLogs.txEffectToLogsId],
  }),
}));
