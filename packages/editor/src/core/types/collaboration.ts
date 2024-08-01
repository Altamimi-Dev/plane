import { Extensions } from "@tiptap/core";
import { EditorProps } from "@tiptap/pm/view";
// hooks
import { TFileHandler } from "@/hooks/use-editor";
// plane editor types
import { TEmbedConfig } from "@/plane-editor/types";
// types
import {
  EditorReadOnlyRefApi,
  EditorRefApi,
  IMentionHighlight,
  IMentionSuggestion,
  TRealtimeConfig,
  TUserDetails,
} from "@/types";

export type TServerHandler = {
  onConnect?: () => void;
  onServerError?: () => void;
};

type TCollaborativeEditorHookProps = {
  editorClassName: string;
  editorProps?: EditorProps;
  extensions?: Extensions;
  handleEditorReady?: (value: boolean) => void;
  id: string;
  mentionHandler: {
    highlights: () => Promise<IMentionHighlight[]>;
    suggestions?: () => Promise<IMentionSuggestion[]>;
  };
  realtimeConfig: TRealtimeConfig;
  serverHandler?: TServerHandler;
  user: TUserDetails;
};

export type TCollaborativeEditorProps = TCollaborativeEditorHookProps & {
  embedHandler?: TEmbedConfig;
  fileHandler: TFileHandler;
  forwardedRef?: React.MutableRefObject<EditorRefApi | null>;
  placeholder?: string | ((isFocused: boolean, value: string) => string);
  setHideDragHandleFunction: (hideDragHandlerFromDragDrop: () => void) => void;
  tabIndex?: number;
};

export type TReadOnlyCollaborativeEditorProps = TCollaborativeEditorHookProps & {
  forwardedRef?: React.MutableRefObject<EditorReadOnlyRefApi | null>;
};
