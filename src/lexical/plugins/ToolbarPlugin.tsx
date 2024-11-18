import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { mergeRegister } from '@lexical/utils';
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  REDO_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import { clsx } from '@/utils/html';

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  useEffect(
    () =>
      mergeRegister(
        editor.registerCommand(
          CAN_UNDO_COMMAND,
          (payload) => {
            setCanUndo(payload);
            return false;
          },
          COMMAND_PRIORITY_LOW,
        ),
        editor.registerCommand(
          CAN_REDO_COMMAND,
          (payload) => {
            setCanRedo(payload);
            return false;
          },
          COMMAND_PRIORITY_LOW,
        ),
      ),
    [],
  );

  return (
    <div>
      <Button
        disabled={!canUndo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
      >
        <ArrowUturnLeftIcon className="size-5" />
      </Button>
      <Button
        disabled={!canRedo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
      >
        <ArrowUturnRightIcon className="size-5" />
      </Button>
    </div>
  );
}

function Button(props: React.ComponentProps<'button'>) {
  return <button {...props} className={clsx('p-2 disabled:opacity-25')} />;
}
