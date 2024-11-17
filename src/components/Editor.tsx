import { useMemo } from 'react';
import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

interface EditorProps {
  namespace: string;
  onError: (error: Error) => void;
  placeholder?: string;
}

export default function Editor({
  namespace,
  onError,
  placeholder = 'Enter something',
}: EditorProps) {
  const config = useMemo<InitialConfigType>(
    () => ({ namespace, onError }),
    [namespace, onError],
  );

  return (
    <LexicalComposer initialConfig={config}>
      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              aria-placeholder={placeholder}
              placeholder={
                <span className="absolute top-0 left-0 text-gray-400 user-select-none pointer-events-none">
                  {placeholder}
                </span>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <AutoFocusPlugin />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
