import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  getDefaultReactSlashMenuItems,
  ReactSlashMenuItem,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { HiOutlineGlobeAlt } from "react-icons/hi";

// Command to insert "Hello World" in bold in a new block below.
const insertHelloWorld = (editor: BlockNoteEditor) => {
  // Block that the text cursor is currently in.
  const currentBlock: Block = editor.getTextCursorPosition().block;

  // New block we want to insert.
  const helloWorldBlock: PartialBlock = {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Hello World",
        styles: {
          bold: true,
        },
      },
    ],
  };

  // Inserting the new block after the current one.
  editor.insertBlocks([helloWorldBlock], currentBlock, "before");
};

// Custom Slash Menu item which executes the above function.
const insertHelloWorldItem: ReactSlashMenuItem = {
  name: "Insert Hello World",
  execute: insertHelloWorld,
  aliases: ["helloworld", "hw"],
  group: "Other",
  icon: <HiOutlineGlobeAlt size={18} />,
  hint: "Used to insert a block with 'Hello World' below.",
};

// List containing all default Slash Menu Items, as well as our custom one.
const customSlashMenuItemList = [
  ...getDefaultReactSlashMenuItems(),
  insertHelloWorldItem,
];

export default function Editor() {
  const editor: BlockNoteEditor = useBlockNote({
    slashMenuItems: customSlashMenuItemList,
  });
  return (
    <div>
      <div class="blockNoteWrapper">
        <BlockNoteView editor={editor} theme={"light"}></BlockNoteView>
      </div>
    </div>
  );
}
