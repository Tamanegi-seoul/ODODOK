import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useState } from "react";
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
  const [markdown, setMarkdown] = useState<string>("");
  const [html, setHTML] = useState<string>("");
  const editor: BlockNoteEditor = useBlockNote({
    slashMenuItems: customSlashMenuItemList,
   
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) => {
      
      // MarkDown
      const saveBlocksAsMarkdown = async () => {
        const markdown: string =
          await editor.blocksToMarkdownLossy(editor.topLevelBlocks);
        setMarkdown(markdown);
      };
      saveBlocksAsMarkdown();

      // HTML
      const saveBlocksAsHTML = async () => {
        const html: string = await editor.blocksToHTMLLossy(editor.topLevelBlocks);
        setHTML(html);
      };
      saveBlocksAsHTML();

    }
  });
  return (
    <div>
      <div className="blockNoteWrapper">
        <BlockNoteView editor={editor} theme={"light"}></BlockNoteView>
        <pre>{markdown}</pre>
        <pre>{html}</pre>
      </div>
    </div>
  );
}
